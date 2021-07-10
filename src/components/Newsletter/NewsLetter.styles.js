import styled from "styled-components";

export const CardContainer = styled.div`
  width: 80vw;
  height: 500px;
  /* height: fit-content; */
  display: flex;
  flex-direction: row;
  border-radius: 26px;
  position: relative;
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  /* background-color: rgba(145, 143, 142, 0.2); */
  backdrop-filter: blur(10px);
  align-self: center;

  @media screen and (max-width: 960px) {
      width: 90%;
      height: 110vh;
      height: auto;
      display: flex;
      flex-direction: column-reverse;
  }
`;
