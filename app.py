
from flask import Flask, request, render_template
import pdfplumber
import os
import openai
import markdown

key = os.getenv('api_key')

app = Flask(__name__)
# openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = key

def to_markdown(text):
    return markdown.markdown(text)

app.jinja_env.filters['markdown'] = to_markdown
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['resume-file']
    # Save uploaded file to local directory
    # file.save('uploads/'+file.filename)
    # Extract text from PDF file
    all_text = ""
    # with pdfplumber.open('uploads/'+file.filename) as pdf:
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            text = page.extract_text(x_tolerance=5, y_tolerance=5, layout=False, x_density=7.25, y_density=13)
            all_text += text
    # Call ChatGPT API with extracted text
    all_text = all_text[:4000]
    print(all_text)
    print(len(all_text))
    # 把解析简历的文本保存到本地
    # with open('uploads/'+file.filename+'.txt', 'w') as f:
    #     f.write(all_text)

    # 简历内容 4000 字以内
    # + 爬虫各大平台的个人数据 -> 文本 sqlite / info.txt
    # + 个人的自我介绍（个人信息）
    # 将以上内容作为输入，输出一份完整的职业规划报告

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "system", "content": "你将扮演专业的职业职业规划导师."},
                {"role": "user", "content": "请基于我的简历对我进行详细的评价，你的回复尽量不要与简历内容重复，请用你自己的话重新组织语言。请分段从专业技能、个人素质、经验背景、文化程度、潜力发展几个方面为我的提供建议，最后为我推荐最配的岗位。再次强调你的输出需要尽可能详细并分段显示，以下是我的简历内容: \n" + all_text + "\nAI:"},
            ]
        )
    # Get response from ChatGPT API
    result = response['choices'][0]['message']['content']
    print(result)
    result = markdown.markdown(result)
    return render_template('index.html', result=result)

def to_markdown(text):
    return markdown.markdown(text)

if __name__ == '__main__':
    app.run(debug=True)