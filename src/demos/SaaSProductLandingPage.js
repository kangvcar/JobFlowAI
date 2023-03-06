import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/ThreeColWithSideImage.js";
// import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import FeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import Pricing from "components/pricing/ThreePlans.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
// import Footer from "components/footers/FiveColumnWithBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";
// import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import ShenchangxiangImg from "images/user-shenchangxiang.jpg";
import HanweijunImg from "images/user-hanweijun.jpg";
import LiweiguangImg from "images/user-liweiguang.png";
import LinaImg from "images/user-lina.png";
import ZhouxiaoyuImg from "images/user-zhouxiaoyu.png";
import LizhihaoImg from "images/user-lizhihao.png";
import ChenyongjieImg from "images/user-chenyongjie.png";
import HuangzhaojunImg from "images/user-huangzhaojun.png";
import ZhangyafengImg from "images/user-zhangyafeng.png";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (
        <AnimationRevealPage>
            <Hero roundedHeaderButton={true} />
            <Features
                subheading={<Subheading>仙人指路</Subheading>}
                heading={
                    <>
                        使用<HighlightedText>「JobFlow AI」</HighlightedText>可以获得什么?
                    </>
                }
            />
            <FeatureWithStats2
                subheading={<Subheading>我们的成绩</Subheading>}
                heading={
                    <>
                    我们一经推出就<wbr /> <span tw="text-primary-500">屡受好评.</span>
                    </>
                }
                description="我们很自豪地向您展示 JobFlow AI 平台受欢迎的程度。用户使用我们的平台进行职业规划和学习，以及职业社交等方面的需求日益增长。我们的数据展示将向您呈现用户使用量及服务次数的增长趋势，以及生成职业画像次数的增加情况。这些数据不仅证明了我们平台的受欢迎程度，同时也反映了用户对于我们平台的信任和满意度。"
                primaryButtonText = "了解更多"
                primaryButtonUrl = "https://github.com/kangvcar/JobFlowAI"
            />
            <FeatureWithSteps
                subheading={<Subheading>探索您的职业未来</Subheading>}
                heading={
                    <>
                        与<HighlightedText>「JobFlow AI」</HighlightedText>一起开启您的职业之旅！
                    </>
                }
                textOnLeft={false}
                imageSrc={macHeroScreenshotImageSrc}
                imageDecoratorBlob={true}
                decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
            />
            <MainFeature2
                subheading={<Subheading>天赋异禀</Subheading>}
                heading={
                    <>
                        <HighlightedText>「JobFlow AI」</HighlightedText>的优势
                    </>
                }
                imageSrc={prototypeIllustrationImageSrc}
                showDecoratorBlob={false}
                features={[
                    {
                        Icon: MoneyIcon,
                        title: "多数据源职业画像",
                        description: "平台结合多个数据源，包括社交媒体、职业网络和招聘网站等，采集和分析职业相关数据，从而提供更加准确和全面的职业发展指导和求职推荐。",
                        iconContainerCss: tw`bg-green-300 text-green-800`
                    },
                    {
                        Icon: BriefcaseIcon,
                        title: "高校精品课程整合",
                        description: "所高校合作，将其优秀的课程整合到平台中，涵盖技能培训、职业知识、创新创业和行业趋势等多个方面，为用户提供更加专业和可靠的职业发展支持。",
                        iconContainerCss: tw`bg-red-300 text-red-800`
                    }
                ]}
            />
            <Pricing
                subheading={<Subheading>价格亲民</Subheading>}
                heading={
                    <>
                        <HighlightedText>合理灵活</HighlightedText>的定价方案
                    </>
                }
                description = "我们的定价方案基于对客户需求的深入了解和分析，结合平台的各项功能和服务，提供了三个定价方案，主要面向在校大学生、职场人士、初创企业。"
                plans={[
                    {
                        name: "基础版",
                        price: ["¥828", "¥69/每月"],
                        oldPrice: "¥948",
                        description: "适合在校大学生",
                        features: ["AI职业规划", "职业画像分析", "智能职位匹配", "职业学习平台（限免试用期）"],
                        url: "https://github.com/kangvcar/JobFlowAI"
                    },
                    {
                        name: "专业版",
                        price: ["¥1548", "¥129/每月"],
                        oldPrice: "¥1908",
                        description: "适合职场人士",
                        features: ["AI职业规划", "职业画像分析", "职业学习平台（免费）", "AI求职辅导", "智能职位匹配", "职业社交网络"],
                        url: "https://github.com/kangvcar/JobFlowAI",
                        featured: "最多人选择"
                    },
                    {
                        name: "企业版",
                        price: ["¥8388", "¥699/每月"],
                        oldPrice: "¥9588",
                        description: "适合中小型企业和初创企业",
                        features: ["AI职业规划", "职业画像分析", "职业学习平台（免费）", "AI求职辅导", "智能职位匹配", "职业社交网络", "专属的人才招聘服务"],
                        url: "https://github.com/kangvcar/JobFlowAI"
                    },
                ]}
            />
            <Testimonial
                subheading={<Subheading>好评如潮</Subheading>}
                heading={
                    <>
                        深受用户<HighlightedText>喜爱.</HighlightedText>
                    </>
                }
                testimonials={[
                    {
                        stars: 5,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            ShenchangxiangImg,
                        heading: "产品理念非常好",
                        quote:
                            "JobFlow AI 平台提供的职业建议和求职推荐非常有价值，可以帮助他更好地了解行业发展趋势和机会，为自己的职业发展做出更加明智的决策。平台的专业性和个性化服务也让他非常满意。他强烈推荐使用 JobFlow AI 平台的人士，相信平台可以为更多人带来实际的职业发展价值。",
                        customerName: "沈昌祥",
                        customerTitle: "中国工程院院士"
                    },
                    {
                        stars: 5,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            HanweijunImg,
                        heading: "项目方向具有很好的前景",
                        quote:
                            "我非常认可JobFlow AI 平台的产品设计和领域覆盖。平台不仅提供了全面、专业和个性化的职业指导和培训，还整合了多个数据源，涵盖了职业知识、技能培训、创新创业和行业趋势等多个方面，非常适合不同职业阶段和不同行业的人士使用。我相信，JobFlow AI 平台将为更多的用户带来职业发展的机遇和成功。",
                        customerName: "韩军伟",
                        customerTitle: "长江学者"
                    },
                    {
                        stars: 5,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            LiweiguangImg,
                        heading: "对整个教育行业产生积极的推动作用",
                        quote:
                            "我非常欣赏 JobFlow AI 平台的使用AI驱动的特点。平台利用先进的人工智能算法，快速分析用户的职业背景和需求，提供个性化的职业指导和求职推荐，同时也整合了高校精品课程和职业专家资源，为用户提供更加全面和专业的职业发展支持。这些特点不仅能够提高用户的职业竞争力，也能够对整个教育行业产生积极的推动作用。",
                        customerName: "李伟光",
                        customerTitle: "教育行业高管"
                    },
                    {
                        stars: 4,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            HuangzhaojunImg,
                        heading: "为企业提供了更多优秀的人才和职业机会",
                        quote:
                            "JobFlow AI 平台为广州劲源科技带来了极大的价值，平台提供了职业发展和培训支持，帮助员工提升职业能力和技能，同时也为企业提供了更多优秀的人才和职业机会。",
                        customerName: "黄军兆",
                        customerTitle: "广州劲源科技"
                    },
                    {
                        stars: 5,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            LinaImg,
                        heading: "有用的职业建议和求职推荐",
                        quote:
                            "JobFlow AI 平台为我提供了非常实用和有用的职业建议和求职推荐，帮助我更好地了解职业市场和行业趋势，为自己的职业发展做出更加明智的选择。",
                        customerName: "莉娜",
                        customerTitle: "高校本科生"
                    },
                    {
                        stars: 4,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            ZhouxiaoyuImg,
                        heading: "对职业发展有了更加清晰和全面的认识",
                        quote:
                            "使用 JobFlow AI 平台后，我发现自己对职业发展有了更加清晰和全面的认识，同时也掌握了更多职业技能和知识，为自己的职业发展打下了坚实的基础。",
                        customerName: "周晓宇",
                        customerTitle: "高校本科生"
                    },
                    {
                        stars: 4,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            LizhihaoImg,
                        heading: "让我更加自信和有准备地面对职业挑战和机会",
                        quote:
                            "JobFlow AI 平台为我提供了很多实用和专业的职业指导和培训资源，让我更加自信和有准备地面对职业挑战和机会。",
                        customerName: "李志豪",
                        customerTitle: "高校研究生"
                    },
                    {
                        stars: 5,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            ChenyongjieImg,
                        heading: "获得了很多新的职业机会和行业信息",
                        quote:
                            "使用 JobFlow AI 平台后，我发现自己的职业发展和求职方向更加清晰和明确，同时也获得了很多新的职业机会和行业信息。",
                        customerName: "陈永杰",
                        customerTitle: "高校研究生"
                    },
                    {
                        stars: 5,
                        profileImageSrc:
                            // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
                            ZhangyafengImg,
                        heading: "是职场人士不可或缺的职业发展工具",
                        quote:
                            "JobFlow AI 平台为我提供了更多职业发展的可能性和机会，帮助我更好地了解职业市场和行业趋势，拓展了自己的职业视野。为对平台的个性化服务和专业性非常满意，认为平台是职场人士不可或缺的职业发展工具。",
                        customerName: "张雅峰",
                        customerTitle: "职场人士"
                    }
                ]}
            />
            <FAQ
                subheading={<Subheading>FAQS</Subheading>}
                heading={
                    <>
                        <HighlightedText>常见问题</HighlightedText>
                    </>
                }
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
            <GetStarted />
            <Footer />
        </AnimationRevealPage>
    );
}
