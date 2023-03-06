import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

import ShenchangxiangImg from "images/user-shenchangxiang.jpg";
import HanweijunImg from "images/user-hanweijun.jpg";
import LiweiguangImg from "images/user-liweiguang.png";
import LinaImg from "images/user-lina.png";
import ZhouxiaoyuImg from "images/user-zhouxiaoyu.png";
import LizhihaoImg from "images/user-lizhihao.png";
import ChenyongjieImg from "images/user-chenyongjie.png";
import HuangzhaojunImg from "images/user-huangzhaojun.png";
import ZhangyafengImg from "images/user-zhangyafeng.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc:
        ShenchangxiangImg,
      quote:
        "JobFlow AI 平台提供的职业建议和求职推荐非常有价值，可以帮助他更好地了解行业发展趋势和机会，为自己的职业发展做出更加明智的决策。平台的专业性和个性化服务也让他非常满意。他强烈推荐使用 JobFlow AI 平台的人士，相信平台可以为更多人带来实际的职业发展价值。",
      customerName: "沈昌祥",
      customerTitle: "中国工程院院士"
    },
    {
      imageSrc:
        HanweijunImg,
      quote:
        "我非常认可JobFlow AI 平台的产品设计和领域覆盖。平台不仅提供了全面、专业和个性化的职业指导和培训，还整合了多个数据源，涵盖了职业知识、技能培训、创新创业和行业趋势等多个方面，非常适合不同职业阶段和不同行业的人士使用。我相信，JobFlow AI 平台将为更多的用户带来职业发展的机遇和成功。",
      customerName: "韩军伟",
      customerTitle: "长江学者"
    },
    {
      imageSrc:
        LiweiguangImg,
      quote:
        "我非常欣赏 JobFlow AI 平台的使用AI驱动的特点。平台利用先进的人工智能算法，快速分析用户的职业背景和需求，提供个性化的职业指导和求职推荐，同时也整合了高校精品课程和职业专家资源，为用户提供更加全面和专业的职业发展支持。这些特点不仅能够提高用户的职业竞争力，也能够对整个教育行业产生积极的推动作用。",
      customerName: "李伟光",
      customerTitle: "教育行业高管"
    },
    {
      imageSrc:
      LinaImg,
      quote:
        "JobFlow AI 平台为广州劲源科技带来了极大的价值，平台提供了职业发展和培训支持，帮助员工提升职业能力和技能，同时也为企业提供了更多优秀的人才和职业机会。",
      customerName: "黄军兆",
      customerTitle: "广州劲源科技"
    },
    {
      imageSrc:
      ZhouxiaoyuImg,
      quote:
        "JobFlow AI 平台为我提供了非常实用和有用的职业建议和求职推荐，帮助我更好地了解职业市场和行业趋势，为自己的职业发展做出更加明智的选择。",
      customerName: "莉娜",
      customerTitle: "高校本科生"
    },
    {
      imageSrc:
      LizhihaoImg,
      quote:
        "使用 JobFlow AI 平台后，我发现自己对职业发展有了更加清晰和全面的认识，同时也掌握了更多职业技能和知识，为自己的职业发展打下了坚实的基础。",
      customerName: "周晓宇",
      customerTitle: "高校本科生"
    },
    {
      imageSrc:
      ChenyongjieImg,
      quote:
        "JobFlow AI 平台为我提供了很多实用和专业的职业指导和培训资源，让我更加自信和有准备地面对职业挑战和机会。",
      customerName: "李志豪",
      customerTitle: "高校研究生"
    },
    {
      imageSrc:
      HuangzhaojunImg,
      quote:
        "使用 JobFlow AI 平台后，我发现自己的职业发展和求职方向更加清晰和明确，同时也获得了很多新的职业机会和行业信息。",
      customerName: "陈永杰",
      customerTitle: "高校研究生"
    },
    {
      imageSrc:
      ZhangyafengImg,
      quote:
        "JobFlow AI 平台为我提供了更多职业发展的可能性和机会，帮助我更好地了解职业市场和行业趋势，拓展了自己的职业视野。为对平台的个性化服务和专业性非常满意，认为平台是职场人士不可或缺的职业发展工具。",
      customerName: "张雅峰",
      customerTitle: "职场人士"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>好评如潮</HeadingTitle>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <QuotesLeft />
                    <Quote>{testimonial.quote}</Quote>
                    <QuotesRight />
                  </QuoteContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
