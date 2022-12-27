import { Outlet, Link as RouterLink} from "react-router-dom";
import styled from 'styled-components';
import React, { useState } from 'react';

import CustomLogo from "./Svg/CustomLogo";


export const HeaderComponent = () => {
    const [MenuOpen, SetMenuOpen] = useState(false);
    const [A, SetA] = useState(false);

    return (
    <>
        <Header>
            <LogoWrapper >
                    <CustomLogo ></CustomLogo>
            </LogoWrapper>
            <Fill />
                <HeaderBubble id="MenuChanger" open={MenuOpen} onClick={(e) => SetMenuOpen(!MenuOpen)}>
                    {MenuOpen === true && <>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/projects" className="link" >Projects</Link>
                                </li>
                                <li>
                                    <Link to="/lookbook" className="link" >Lookbook</Link>
                                </li>
                                <li>
                                    <Link to="/aboutme" className="link" >AboutMe</Link>
                                </li>
                            </ul>
                        </nav>
                        <Outlet />
                    </>}
                </HeaderBubble>
            <Fill />
            <HiddenItem />
        </Header> 
    </>
    );
}

const Link = styled(RouterLink)`
    color: rgba(20, 20, 20, 1);
    position: relative;
    text-decoration: none;

    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: rgba(111, 2, 198, 1);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out; 
    }
    
    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
   

`;

const Header = styled.div`
    position: absolute;
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


const HeaderBubble = styled.div`
    height: 50px;
    border-radius: 50px;
    width: ${({ open }) => open ? 300:50}px;
    padding: ${({ open })=> open ? '0px 20px' : '0px'};
    cursor: ${({ open }) => open ? 'default' : 'cursor'};
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #101010;
    
    
    &:hover {
        ${({open}) => open ? '' : '&:hover {background-color: #C4C4C4;'}
	}

    ul {
        display: flex;
        align-content: center;
        list-style-type: none;
        width: 100%;
        cursor: pointer;
        text-decoration: none;
        border-radius: 5px;
        white-space: nowrap;
        animation: menu-fade 1.2s;
        
        &:hover {
            color: black !important;
        }

    }
    
    li{
        padding: 7px; 
    }


    transition: width .2s ease-in-out;

    @keyframes menu-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const LogoWrapper = styled.div`

    svg{
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


export default HeaderComponent;