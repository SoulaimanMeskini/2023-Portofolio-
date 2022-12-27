import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import startLoop from '../assets/vids/Start_Loop.mp4';
import midLoop from '../assets/vids/Mid_Loop.mp4';
import breakLoop from '../assets/vids/Break_Loop.mp4';

export const VideoLoop = () => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(startLoop);

  useEffect(() => {
    const handleEnded = () => {
      setCurrentVideo(midLoop);
    };

    videoRef.current.addEventListener('ended', handleEnded);

    return () => {
      videoRef.current.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleClick = () => {
    setCurrentVideo(breakLoop);
  };

  return (
    <VideoHolder>
      <video
        src={currentVideo}
        autoPlay
        loop
        type="video/mp4"
        ref={videoRef}
        onClick={handleClick}
      />
    </VideoHolder>
  );
};

const VideoHolder = styled.div`
  background-color: #E7EDF1;
  video {
    right: 0;
    bottom: 0;
    width: 100% !important;
    height: auto !important;
  }
`;

export default VideoLoop;