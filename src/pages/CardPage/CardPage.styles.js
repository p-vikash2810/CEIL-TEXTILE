import styled from "styled-components";
import bgImg from "../../Images/05.jpg";

export const CardPageContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* background-image: url(${bgImg}); */
  background: rgb(254, 193, 130);
  background: linear-gradient(
    50deg,
    rgba(254, 193, 130, 1) 20%,
    rgba(254, 160, 142, 1) 100%
  );
  background-size: cover;
  padding: 0 auto;
`;

export const CardPageWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  backdrop-filter: blur(10px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);

  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);

  }
`;
