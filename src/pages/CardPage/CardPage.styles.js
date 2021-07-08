import styled from "styled-components";
import bgImg from "../../Images/05.jpg";

export const CardPageContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${bgImg});
  background-size: cover;
`;

export const CardPageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  backdrop-filter: blur(5px);

`;
