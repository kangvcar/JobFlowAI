import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import image1 from "../../images/u0.jpg";
import image2 from "../../images/u1.png";
import image3 from "../../images/u5.svg";
import image4 from "../../images/u4.svg";
import mylogo from "../../images/u3.svg";
import image5 from "../../images/u2.svg";
import Header, { NavLink, NavLinks,  LogoLink, NavToggle, DesktopNavLinks, } from "../headers/light.js";





//新增：导航
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, RGB(31, 10, 123), RGB(96, 47, 217));
  /* 渐变从左到右，颜色依次为紫色和深粉色 */
  padding: 0.75rem;
  position: relative;
  /* 让 ::before 相对于 NavbarWrapper 定位 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -48px; /* 根据需要调整半圆的位置 */
    width: 60px; /* 半圆的宽度 */
    height: 100%; /* 半圆的高度 */
    background: RGB(31, 10, 123); 
    border-radius: 350% 50% 0 0;
  }
`;

//新增
const CustomNavLink = tw.a`
text-lg my-1 lg:text-sm lg:mx-10 lg:my-0
 tracking-wide transition duration-300
 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
 text-white
`;



const StyledHeader = styled(Header)`
  ${tw` max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
//修改：修改了登录按钮的样式
const PrimaryLink = tw(NavLink)`
lg:mx-0
px-6 py-2 rounded bg-purple-400 text-purple-500 
hocus:bg-purple-600 hocus:text-gray-200 focus:shadow-outline
border-b-0 rounded-lg text-sm font-normal
`;

//修改：删除了背景图片
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
 
 
`;
//修改：删除了灰色遮罩层
const OpacityOverlay = tw.div`z-10 absolute inset-0  `;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;


/*const Content = tw.div`
px-4 flex flex-1 flex-col justify-center items-center relative z-10
`;
*/

//修改了字体大小
/*const Heading = styled.h1`
  ${tw`text-3xl text-left sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;
*/
//修改了按钮样式
const PrimaryAction = tw.button`rounded-5xl w-full h-full px-2 py-1 mt-5 text-xs sm:text-3xl sm:mt-16 sm:px-8 sm:py-4 bg-gray-100  shadow transition duration-300 
bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline border-solid border-8 border-yellow-500`;//这里添加了 border-solid、border-2 和 border-yellow-500 这三个样式，分别表示边框样式为实线、边框宽度为 2px、边框颜色为黄色（即（255, 188, 0））。






//新增容器样式
const Container1 = styled.div`
  ${tw`flex flex-col h-full flex-wrap `}
  align-content: space-between;
  padding-top:2rem`;
//新增容器样式
const Col1 = styled.div`
  ${tw`w-3/5 h-full bg-black`}

`;

//新增容器样式
const BgImage = styled.div`
  ${tw`bg-cover mx-auto h-full`}
  background-image: url(${image1});
  background-size: cover; // 将背景图片缩放以铺满背景区域并保持比例
  background-position: center; // 将背景图片水平和垂直居中，以确保完全显示
  padding:0;
`;
//新增容器样式
const Col2 = styled.div`
  ${tw`flex flex-col items-center h-full  `}
  width:33.8%
`;
//新增容器样式
const Row = styled.div`
  ${tw`m-5 `}

`;
//新增容器样式
const Row1 = styled(Row)`
  ${tw` w-full`}
  height: 56%;
  margin-top: 0;
   margin-bottom: 0;
`;
//新增容器样式
const Row2 = styled(Row)`
  ${tw`flex flex-row   w-full`}
  height: 18%;
  justify-content: space-between;
   margin-top: 1rem;
   margin-bottom: 0;
   
`;
//新增容器样式
const Row3 = styled(Row)`
  ${tw`flex justify-center w-full items-center`}
  height:18%;
 margin-top: 0;
   margin-bottom: 0;
`;
//新增容器样式
const Row4 = styled(Row)`
  ${tw` w-full`}
  height: 56.4%;
  width:44%;
  margin-top: 0;
   margin-bottom: 0;
   padding-top:1.5rem;
   margin:0;
`;


//新增容器样式
const Image1 = styled.img`
  ${tw`w-full h-full`}
  background-image: url(${image2});
  background-size: cover;

`;


//新增容器样式
const Image2 = styled.div`
  ${tw`h-full `}
  background-image: url(${image3});
  width:74%;
  background-size: contain; 
  background-repeat: no-repeat;  
  background-position: center;   
 

`;

//新增容器样式
const Image3 = styled.div`
  ${tw` h-full`}
  background-image: url(${image4}) ;
  background-size: cover;
  width:16%;
  height:66%;
  background-size: contain; 
  background-repeat: no-repeat;  
  background-position: center; 
  
 
`;
const Image4 = styled.div`
  ${tw` h-full`}
  background-image: url(${image5}) ;
  background-size: cover;
  width:100%;
  height:80%;
  background-size: contain; 
  background-repeat: no-repeat;  
  background-position: left  center; 
margin-left:1.5rem;
margin-top:1rem;
`;
export default () => {
  const navLinks = [
    <NavbarWrapper>
      <NavLinks key={1}>
        <CustomNavLink href="#" >
          职业画像
        </CustomNavLink>
        <CustomNavLink href="#">
          AI求职指导
        </CustomNavLink>
        <CustomNavLink href="/course">
          精品课程
        </CustomNavLink>
        <CustomNavLink href="#">
          多数据源
        </CustomNavLink>
        <CustomNavLink href="/blog">
          博客文章
        </CustomNavLink>
        <CustomNavLink href="/about-us">
          创始团队
        </CustomNavLink>
        <CustomNavLink href="/pricing" tw=" pr-8">
          价格
        </CustomNavLink>
      </NavLinks>
      <NavLinks key={2} tw="pl-24 pr-12">
        <PrimaryLink href="/login">
          登录
        </PrimaryLink>



      </NavLinks></NavbarWrapper>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks}   logoLink={<LogoLink href="/"><img src={mylogo} alt="logo" /></LogoLink>} />

        <Container1>
          <Col1>
            <BgImage>
               <Row4>    
           <Image4></Image4>
            </Row4> 
             </BgImage>
          </Col1>
          <Col2>
            <Row1>
              <Image1 />
            </Row1>
            <Row2>
              <Image2 />
              <Image3 />
            </Row2>
            <Row3>
              <PrimaryAction>生成职业画像</PrimaryAction>
            </Row3>
          </Col2>
        </Container1>
      </HeroContainer>
    </Container>
  );
};
