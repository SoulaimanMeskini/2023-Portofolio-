import React from 'react';
import styled from 'styled-components';

import { CircleLensComponent } from '../components/CircleLens';


export const HomeComponent = () => {


    return (
    <>
        <home>
            <CircleLensComponent>
            </CircleLensComponent>
        </home>
    </>
    );
}

const Home = styled.div`

    p{
        color: whitesmoke;
    }
`;

export default HomeComponent;