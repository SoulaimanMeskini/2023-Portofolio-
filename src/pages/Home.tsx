import styled from "styled-components";

import CircleLensComponent from "../components/CircleLens";

export const HomeComponent = () => {
  return (
    <>
      <Home>
        <CircleLensComponent></CircleLensComponent>
      </Home>
    </>
  );
};

const Home = styled.div`
  p {
    color: whitesmoke;
  }
`;

export default HomeComponent;
