import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";


const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1678101102849-3c7aa705be90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4123&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
    const navLinks = [
        <NavLinks key={1}>
            <NavLink href="#">
                职业画像
            </NavLink>
            <NavLink href="#">
                AI求职指导
            </NavLink>
            <NavLink href="/course">
                精品课程
            </NavLink>
            <NavLink href="#">
                多数据源
            </NavLink>
            <NavLink href="/blog">
                博客文章
            </NavLink>
            <NavLink href="/about-us">
                创始团队
            </NavLink>
            <NavLink href="/pricing">
                价格
            </NavLink>
        </NavLinks>,
        <NavLinks key={2}>
            <PrimaryLink href="/login">
                登录
            </PrimaryLink>
        </NavLinks>
    ];

    return (
        <Container>
            <OpacityOverlay />
            <HeroContainer>
                <StyledHeader links={navLinks} />
                <Content>
                    <Heading>
                        「JobFlow AI」<br />
                        是一个人工智能驱动的
                        <br />
                        <span tw="text-primary-500">多数据源职业画像</span><br />
                        求职推荐平台
                    </Heading>
                    <PrimaryAction>生成职业画像</PrimaryAction>
                </Content>
            </HeroContainer>
        </Container>
    );
};
