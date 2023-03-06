import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
// import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
import CustomersLogoStripImage from "../../images/customers-logo-gpnu.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

export default ({ roundedHeaderButton }) => {
    return (
        <>
            <Header roundedHeaderButton={roundedHeaderButton} />
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            <span tw="text-primary-500">「JobFlow AI」</span><br />
                            人工智能驱动的<br />
                            <span tw="text-primary-500">多数据源职业画像</span><br />
                            职业发展平台
                        </Heading>
                        <Paragraph>
                            利用先进的人工智能和机器学习算法，从社交媒体、职业网络和招聘网站等多个数据源收集和分析数据。
                            为每个用户提供个性化的职业指导和求职推荐，帮助用户在快速变化的就业市场中保持竞争力，发现新的职业机会，实现职业发展的最大潜力。
                        </Paragraph>
                        <Actions>
                            <button>生成职业画像</button>
                        </Actions>
                        <CustomersLogoStrip>
                            <p>我们值得信赖的客户</p>
                            <img src={CustomersLogoStripImage} alt="Our Customers" />
                        </CustomersLogoStrip>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img
                                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                                src={DesignIllustration}
                                alt="Design Illustration"
                            />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
                <DecoratorBlob1 />
            </Container>
        </>
    );
};
