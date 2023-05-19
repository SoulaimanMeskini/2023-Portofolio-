import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const HeaderbubbleComponent = () => {
  const [MenuOpen, SetMenuOpen] = useState(false); // Checks if Headerbubble is clicked then opens up
  const [A, SetA] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HeaderBubble
        id="MenuChanger"
        open={MenuOpen}
        onClick={(e) => SetMenuOpen(!MenuOpen)}
      >
        {MenuOpen === true && (
          <>
            <nav>
              <ul>
                <li>
                  <Text
                    id="TextChanger"
                    to="/projects"
                    className="link"
                    onClick={() => navigate("/projects")}
                  >
                    Projects
                  </Text>
                </li>
                <li>
                  <Text
                    id="TextChanger"
                    to="/lookbook"
                    className="link"
                    onClick={() => navigate("/lookbook")}
                  >
                    Lookbook
                  </Text>
                </li>
                <li>
                  <Text
                    id="TextChanger"
                    to="/aboutme"
                    className="link"
                    onClick={() => navigate("/aboutme")}
                  >
                    AboutMe
                  </Text>
                </li>
              </ul>
            </nav>
          </>
        )}
      </HeaderBubble>
    </>
  );
};

const Text = styled.div`
  color: rgba(20, 20, 20, 1);
  position: relative;
  text-decoration: none !important;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: rgba(111, 2, 198, 1);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const HeaderBubble = styled.div`
  height: 50px;
  border-radius: 50px;
  width: ${({ open }) => (open ? 300 : 50)}px;
  cursor: ${({ open }) => (open ? "default" : "cursor")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;

  &:hover {
    ${({ open }) => (open ? "" : "&:hover {background-color: #C4C4C4;")}
  }

  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;
    animation: menu-fade 1.2s;
    list-style-type: none;
    text-decoration: none;

    &:hover {
      color: black !important;
    }
  }

  li {
    margin: 0 10px;
  }

  transition: width 0.2s ease-in-out;

  @keyframes menu-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default HeaderbubbleComponent;
