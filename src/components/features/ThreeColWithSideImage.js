import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
//   ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg w-full mx-auto py-20 md:py-24`}
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center w-full mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
//   ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
    ${tw`w-1/2`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "为职业生涯打造个性化解决方案 —— 探索 JobFlow AI 的职业发展服务" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
        imageSrc: ShieldIconImage,
        title: "AI 职业规划 (AI Career Planning)",
        description: "利用机器学习算法分析用户的职业历史、技能和兴趣等信息，生成个性化的职业画像，提供符合用户需求和潜力的职业发展建议，帮助用户做出更明智的职业决策。"
    },
    {
        imageSrc: SupportIconImage,
        title: "AI 求职辅导 (AI Job Coaching)",
        description: "利用机器学习算法分析用户的简历和求职历史，为用户提供符合其需求和潜力的求职建议和技巧，并根据用户的反馈和求职情况提供个性化的求职支持和指导。"
    },
    {
        imageSrc: CustomizeIconImage,
        title: "职业学习平台 (Career Learning Hub)",
        description: "利用职业画像分析用户的职业特征和潜力，推荐符合用户需求和兴趣的在线课程和培训资源，同时利用机器学习算法不断优化推荐结果，并根据用户的反馈和学习情况提供个性化的学习建议和支持。"
    },
    {
        imageSrc: ReliableIconImage,
        title: "职业社交网络 (Career Social Network)",
        description: "利用职业画像分析用户的职业关系和社交活动，推荐符合用户需求和兴趣的职业导师和合作伙伴，同时提供职业交流和资源分享的平台，帮助用户建立有益的职业关系和合作伙伴。"},
    {
        imageSrc: FastIconImage,
        title: "职业画像分析 (Career Profile Analysis)",
        description: "利用职业画像分析用户的职业历史、技能和兴趣等数据，生成个性化的职业画像，帮助用户了解自己的职业特征和潜力，提供更个性化的职业发展建议和支持，并为平台提供更精准和有效的数据分析和预测。"},
    {
        imageSrc: SimpleIconImage,
        title: "智能职位匹配 (Intelligent Job Matching)",
        description: "利用职业画像分析用户的职业特征和潜力，为用户提供符合其需求和兴趣的职位匹配和推荐，同时利用机器学习算法不断优化匹配算法和结果，提高匹配的准确性和效率。"}
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "利用机器学习算法分析用户的职业历史、技能和兴趣等信息，生成个性化的职业画像"}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
