import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

import startLoop from '../assets/vids/Start_Loop.mp4';
import midLoop from '../assets/vids/Mid_Loop.mp4';
import breakLoop from '../assets/vids/Break_Loop.mp4';

export const VideoLoop = (props) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(startLoop);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  // useEffect hook to set src and play video every time the component is rendered
  useEffect(() => {
    videoRef.current.src = currentVideo;
    videoRef.current.play();

    // return function to pause video when the component unmounts
    return () => {
      videoRef.current.pause();
    };
  }, []);  

  useEffect(() =>{
    if (props.loopchange) {
      setCurrentVideo(breakLoop);
    }
  }, [props.loopchange]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
      

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEnded = () => {
      if (currentVideo === startLoop) {
        setCurrentVideo(midLoop);
      }
    };

    if (isPlaying) {
      videoRef.current.addEventListener('ended', handleEnded);
    }
  
    return () => {
      videoRef.current.removeEventListener('ended', handleEnded);
    };
  }, [isPlaying, currentVideo]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');
  
    const drawFrame = () => {
      if (video.paused || video.ended) {
        return;
      }
  
      ctx.drawImage(video, 0, 0);
      requestAnimationFrame(drawFrame);
    };
  
    video.src = currentVideo;
    video.loop = currentVideo === midLoop;
    video.currentTime = 0; // reset video to the start when it ends
    video.play();
    drawFrame();
  }, [currentVideo]);
  
  return (
    <VideoHolder>
      <canvas
        ref={canvasRef}
        width={viewportWidth}
        height={viewportHeight}
      />
      <video ref={videoRef} style={{ display: 'none' }} />
    </VideoHolder>
  );
  };
  
  const VideoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  video {
    width: 100% !important;
    height: auto !important;
  }
`;
  
  export default VideoLoop;
