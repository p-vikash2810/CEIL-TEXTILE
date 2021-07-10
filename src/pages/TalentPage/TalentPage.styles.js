import styled from "styled-components";
import imgbg from "../../Images/50.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(254, 193, 130);
  background: linear-gradient(
    50deg,
    rgba(254, 193, 130, 1) 20%,
    rgba(254, 160, 142, 1) 100%
  );
  /* background-image: url(${imgbg}); */
  object-fit: cover;
  background-size: contain;
  background: rgb(61, 61, 61);
  background: linear-gradient(
      50deg,
      rgba(61, 61, 61) 20%,
      rgba(222, 220, 200) 100%
  );

  @media screen and (max-width: 960px) {
    height: 140vh;
  }
`;
