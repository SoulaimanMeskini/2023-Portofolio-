import React from "react";
import styled from "styled-components";

import CustomLogo from "./Svg/CustomLogo";
import HeaderbubbleComponent from "./Buttons/Headerbubble";

export const HeaderComponent = () => {
  return (
    <>
      <Header>
        <LogoWrapper>
          <CustomLogo></CustomLogo>
        </LogoWrapper>
        <HeaderbubbleComponent></HeaderbubbleComponent>
        <HiddenItem />
      </Header>
    </>
  );
};

const Header = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100vw;
  display: flex;
  background-color: transparent;
  z-index: 21;
  margin-bottom: -40px;
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

const Fill = styled.div`
  display: flex;
  flex-grow: 1;
`;

const LogoWrapper = styled.div`
  svg {
    align-content: center;
    background-size: cover;
    transition: 0.6s;
    width: 150px;
    height: 100%;
    margin: 10px;
    cursor: pointer;
  }
`;

const HiddenItem = styled.div`
  width: 150px;
  height: 60px;
  display: block;
  margin: 10px;
`;
