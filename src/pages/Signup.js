import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-right.png";
import logo from "images/login-logo.png";
import vxIconImageSrc from "images/vx-icon.png";
import phoneIconImageSrc from "images/phone-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import  left from "images/1.png";
import  right from "images/2.png";
import text from "../images/signup-welcome.png";






const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold text-purple-800`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-700 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const IllustrationContainer1 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 100;
  right: 0;
  bottom: 0;
  left: 0; 
  z-index: 10;
  width: 300px;  
   height: 400px;
`;

const IllustrationContainer2 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100; 
  z-index: 10;
  width: 400px;  
   height: 400px;
`;

const IllustrationContainer3 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 500;
  right: 0;
  bottom: 50;
  left: 100; 
  z-index: 10;
  width: 1000px;  
   height: 500px;
`;






export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "用户注册 ",
  socialButtons = [
    {
      iconImageSrc: vxIconImageSrc,
      text: "微信注册",
      url: "#"
    },
    {
      iconImageSrc: phoneIconImageSrc ,
      text: "手机注册",
      url: "#"
    }
  ],
  submitButtonText = "注册",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "/terms-of-service",
  privacyPolicyUrl = "/privacy-policy",
  signInUrl = "/login"
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>或者使用电子邮箱注册</DividerText>
              </DividerTextContainer>
              <Form action="/login">
                <Input type="email" placeholder="输入邮箱号" />
                <Input type="password" placeholder="输入密码" />
                <Input type="password" placeholder="确认密码" />
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>






                <p tw="mt-8 text-sm text-gray-600 text-center">
                  已有帐号?{" "}
                  <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                    登录
                  </a>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>

        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>

        <IllustrationContainer1 >
          <IllustrationImage imageSrc={left} />
        </IllustrationContainer1>

        <IllustrationContainer2 >
          <IllustrationImage imageSrc={right} />
        </IllustrationContainer2>

        <IllustrationContainer3 >
          <p tw="mt-8 text-sm text-gray-100 text-center">
            <h2 tw="text-2xl xl:text-3xl font-extrabold ">
              欢迎来到JOBFLOW AI!
            </h2>
          </p>
        </IllustrationContainer3>








      </Content>
    </Container>
  </AnimationRevealPage>
);
