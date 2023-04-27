import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "登录并上传个人简历",
      description: "用户在 JobFlow AI 平台注册账号并登录后，可以填写个人资料和上传个人简历PDF文件，以便平台了解用户的教育背景、工作经历、技能和成就等信息，为用户提供更个性化的职业服务。"
    },
    {
      heading: "连接互联网平台并获取数据（可选）",
      description: "用户可以连接各大互联网平台（如LinkedIn、Indeed等）获取个人数据，以便平台从多个数据源分析用户的职业历史、技能和兴趣等信息，并生成个性化的职业画像。"
    },
    {
      heading: "生成专属职业画像",
      description: "平台利用机器学习算法分析用户的职业历史、技能和兴趣等信息，生成个性化的职业画像，帮助用户了解自己的职业特征和潜力，并为用户提供符合其需求和兴趣的职业发展建议和支持。"
    },
    {
      heading: "获得AI职业规划服务",
      description: "基于用户的职业画像和职业规划目标，平台为用户提供个性化的AI职业规划服务，帮助用户制定职业规划方案、解决职业发展中的问题和挑战，以及发现更多的职业机会。"
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>{(index+1).toString().padStart(2,'0')}</StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
