import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import message1 from "images/message1.png";
import message2 from "images/message2.png";
import message3 from "images/message3.png";
import message4 from "images/message4.png";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div` w-full max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-full xl:w-10/12 p-6 sm:p-12 w-full`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center w-full bg-purple-100  text-indigo-600 border-red-500`;
const Heading = tw.h1`text-2xl xl:text-3xl w-full font-extrabold text-purple-600`;
const FormContainer = tw.div`flex-1 mt-8 h-24 w-11/12 gap-4 px-0 py-16`;

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

const Form1=tw.form`max-w-xs flex items-center flex-wrap float-left w-full `;
const Form2=tw.form`max-w-xs flex items-center flex-wrap float-right w-full`;
const Form = tw.form`max-w-xs flex items-center flex-wrap`;
const Input = tw.input`px-3 py-4 rounded-lg font-medium bg-gray-100  
                        border border-gray-200 placeholder-gray-500 text-sm  
                        focus:outline-none focus:border-gray-400 focus:bg-white 
                         float-left` ;
const Input2 = tw.button` 

hocus:bg-primary-400 
hocus:text-gray-200  
focus:shadow-outline
  bg-blue-500 
  border border-gray-500 
  mt-12 ml-48
  rounded-full 
  rounded-lg  
  items-center 
  text-center 
  inline 
  bg-primary-600 
  text-white 
  h-12 w-40
`
const Input3 = tw.button`

hocus:bg-orange-400 
hocus:text-gray-200  
focus:shadow-outline
border border-gray-500 ml-72 rounded-full 
rounded-lg  items-center text-center inline 
text-white bg-orange-500 h-12 w-40`
const FormDiv =tw.div`w-full text-center py-2`
const Formdiv =tw.div`mt-2 ml-1 border border-2 border-gray-500 h-10 flex items-center justify-center inline w-16  rounded-full bg-primary-600 rounded-lg text-white float-left text-center`
const Img=tw.div`absolute`

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer1 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 10%;
  right: 0%;
  bottom: 0%;
  left: 35%; 
  z-index: 10;
  width: 29%;  
   height: 29%;
   margin: unset;
`;
const IllustrationContainer2 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 5%;
  right: 0%;
  bottom: 0%;
  left: 70%; 

  width: 30%;  
   height: 30%;
`;
const IllustrationContainer3 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 70%;
  right: 0;
  bottom: 0;
  left: 75%; 
  width: 40%;  
   height: 40%;
`;
const IllustrationContainer4 = styled.div`
  ${tw` text-center hidden lg:flex justify-center`}  
  position: absolute;
  top: 22%;
  right: 0;
  bottom: 0;
  left: 40%; 
  width: 20%;  
   height: 64%;

`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}  
`;

export default ({

                    illustrationImageSrc = message3,

                }) => (
    <AnimationRevealPage>

        <Container>
            <IllustrationContainer1 >
                <IllustrationImage imageSrc={message1} />
            </IllustrationContainer1>
            <IllustrationContainer2 >
                <IllustrationImage imageSrc={message2} />
            </IllustrationContainer2>
            <IllustrationContainer3 >
                <IllustrationImage imageSrc={message3} />
            </IllustrationContainer3>
            <IllustrationContainer4 >
                <IllustrationImage imageSrc={message4} />
            </IllustrationContainer4>
            <Content>

                <MainContainer>


                    <Heading>个人信息</Heading>
                    <Heading>Personal Information</Heading>
                    <MainContent>

                        <FormContainer>
                            <Form1>
                                <FormDiv>
                                    <Formdiv>
                                        姓名
                                    </Formdiv>
                                    <Input type="姓名" placeholder="姓名"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        年龄
                                    </Formdiv>
                                    <Input type="年龄" placeholder="年龄"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        性别
                                    </Formdiv>
                                    <Input type="性别" placeholder="性别"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        邮箱
                                    </Formdiv>
                                    <Input type="邮箱" placeholder="邮箱"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        电话
                                    </Formdiv>
                                    <Input type="电话" placeholder="电话"/>
                                </FormDiv>
                            </Form1>

                            <Form2>
                                <FormDiv>
                                    <Formdiv>
                                        学校
                                    </Formdiv>
                                    <Input type="学校" placeholder="学校"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        学院
                                    </Formdiv>
                                    <Input type="学院" placeholder="学院"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        专业
                                    </Formdiv>
                                    <Input type="专业" placeholder="专业"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        学号
                                    </Formdiv>
                                    <Input type="学号" placeholder="学号"/>
                                </FormDiv>
                                <FormDiv>
                                    <Formdiv>
                                        年级
                                    </Formdiv>
                                    <Input type="年级" placeholder="年级"/>
                                </FormDiv>
                            </Form2>

                        </FormContainer>
                    </MainContent>
                    <Input2 type="保存资料" placeholder="保存资料">保存资料</Input2>
                    <Input3 type="简历PDF上传" placeholder="简历PDF上传">上传简历</Input3>
                </MainContainer>
            </Content>
        </Container>
    </AnimationRevealPage>


);
