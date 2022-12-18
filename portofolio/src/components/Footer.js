import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';



export const FooterComponent = () => {


    return (
    <>
        <div>Footer</div>
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
    color: #101010
       
`;

export default FooterComponent;