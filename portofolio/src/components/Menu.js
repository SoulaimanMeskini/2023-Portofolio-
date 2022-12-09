import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';



    function Menu() {
    return (
    <>
        <HeaderBubble id="MenuChanger">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/lookbook">Lookbook</Link>
                        </li>
                        <li>
                            <Link to="/Aboutme">Aboutme</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
        </HeaderBubble>
    </>
    );
}

const HeaderBubble = styled.div`

    height: 50px;
    border-radius: 50px;
    width:  50px;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #101010;
    
    
    &:hover {
       background-color: #C4C4C4;
	}

    p {
        cursor: pointer;
        text-decoration: none;
        border-radius: 5px;
        white-space: nowrap;
        animation: menu-fade .8s;
        &:hover {
            color: #6F02C6;
        }

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

export default Menu;