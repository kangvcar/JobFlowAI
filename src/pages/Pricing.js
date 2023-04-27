import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FAQ from "components/faqs/SingleCol.js";

export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <Pricing />
            <Testimonial
                heading="Our Paying Customers"
            />
            <FAQ
                faqs={[
                    {
                        question: "如何使用 JobFlow AI 平台？",
                        answer:
                            "使用 JobFlow AI 平台非常简单。用户只需要在平台上注册账号，并填写相关的职业信息和兴趣，即可开始使用平台提供的职业建议和求职推荐等服务。平台还提供了简单易懂的用户指南和视频教程，帮助用户更好地了解和使用平台。"
                    },
                    {
                        question: "是否需要付费使用 JobFlow AI 平台？",
                        answer:
                            "JobFlow AI 平台提供免费和付费的服务，用户可以根据自己的需求选择适合的服务。免费的服务包括基本的职业建议和求职推荐，而付费的服务则提供更加个性化和专业的职业指导和培训。具体来说，平台的付费服务包括个人职业咨询、行业分析报告、职业培训课程等。"
                    },
                    {
                        question: "JobFlow AI 平台如何保护我的数据隐私？",
                        answer:
                            "JobFlow AI 平台非常重视用户的数据隐私，采取了多种措施来保护用户的数据安全。首先，平台只收集用户必要的个人信息，如职业背景和职业兴趣等，以保证用户的隐私安全。其次，平台采用了先进的数据加密和安全措施，保障用户数据的安全性。最后，平台不会将用户的数据分享给任何第三方机构，保证用户数据的机密性。"
                    },
                    {
                        question: "如何获得更好的职业建议和推荐？",
                        answer:
                            "为了获得更好的职业建议和推荐，用户可以在平台上提供更多的个人信息和职业经验，例如教育背景、工作经历、技能等。此外，用户还可以在平台上参加相关的职业测试和调查，获取更加准确的职业建议和推荐。"
                    },
                    {
                        question: "如何发现新的职业机会？",
                        answer:
                            "JobFlow AI 平台可以帮助用户发现新的职业机会。用户可以通过平台上的职业分析和行业趋势分析了解不同职业领域和行业的发展趋势和机会，为自己的职业发展做出更加明智的决策。此外，平台还会根据用户的职业兴趣和经验推荐相关的职业机会和招聘信息。"
                    },
                    {
                        question: "如何参加平台提供的职业培训课程？",
                        answer:
                            "JobFlow AI 平台提供了多种职业培训课程，用户可以根据自己的需要 选择适合的课程进行学习。用户可以在平台上浏览课程目录和课程介绍，选择自己感兴趣和需要的课程。一旦选择了课程，用户可以在线学习，并在平台上与其他学员交流和互动，分享学习心得和职业经验。平台还会根据用户的学习进度和表现，提供相应的学习支持和指导，帮助用户更好地掌握职业技能和知识。"
                    }
                ]}
            />
            <Footer />
        </AnimationRevealPage>
    );
};
