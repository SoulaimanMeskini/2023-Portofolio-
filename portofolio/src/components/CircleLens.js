import React, { useState } from 'react';
import styled from 'styled-components';

import { VideoLoop as VideoLoopComponent } from '../components/VideoLoop';

export const CircleLensComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  const [videochanger,  setVideochanger] = useState(false);

  const handleClick = () => {
    // set the loopchange prop to true here
    setVideochanger(true);
  }


  return (
    <>
      {videochanger
      ?<VideoLoopComponent loopchange={videochanger} />
      :<VideoLoopComponent loopchange={videochanger} />
      }
      <Section>
        <OpenupCircle
          onClick={() => {
            if (!isDisabled) {
              setIsExpanded(!isExpanded);
              setIsDisabled(true);
              setVideochanger(true);
              handleClick();
            }
          }}
          isExpanded={isExpanded}
          disabled={isDisabled}
          stopAnimation={stopAnimation}
        >
          <InnerDiv
            onMouseEnter={() => setStopAnimation(true)}
            onMouseLeave={() => setStopAnimation(false)}
            isExpanded={isExpanded}
            stopAnimation={stopAnimation}
            disabled={isDisabled}
          />
        </OpenupCircle>
      </Section>
    </>
  );
};

  // {
  //   const VideoLoop = styled.div`
  //      position: absolute;
  //      top: 0;
  //      left: 0;
  //      width: 100vw;
  //      height: 100vh;
  //     video {
  //       width: 100%;
  //       height: 100%;
  //       object-fit: cover;
  //     }
  //   `;
  // }

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  

`;

const OpenupCircle = styled.div`
  position: absolute;
  width: ${(props) => (props.isExpanded ? "200%" : "700px")};
  height: ${(props) => (props.isExpanded ? "200%" : "700px")};
  border: 5000px solid #101010;
  border-radius: 50%;
  box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
  -webkit-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
  -moz-box-shadow: -1px -1px 27px 8px rgba(0, 0, 0, 0.81) inset;
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out;
  animation-name: ${(props) => (props.stopAnimation ? "none" : "pulse")};
  animation-iteration-count: ${(props) => (props.stopAnimation ? "0" : "infinite")};
  animation-duration: 3s;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    ${(props) =>
      !props.stopAnimation &&
      `
        animation-play-state: paused;
        animation-fill-mode: forwards;
      `}
  }
`;

export default CircleLensComponent;