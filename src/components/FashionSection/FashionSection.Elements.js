import styled, { keyframes } from "styled-components";
import { color1, color2 } from "../../globalStyles";
import bgImage from "../../Images/51.jpg";

export const FashionSec = styled.div`
  width: 100vw;
  height: ${({ bigSec }) => (bigSec ? "150vh" : "100vh")};
  display: flex;
  margin-bottom: 30px;
  padding: auto;
  background: ${({ lightBg }) => (lightBg ? "#fff" : `${color1}`)};
  background-image: url(${bgImage});
  background-size: cover;
  border: 2px solid black;

  @media screen and (max-width: 960px) {
    height: ${({ bigSec }) => (bigSec ? "230vh" : "120vh")};
  }

  @media screen and (max-width: 760px) {
    height: ${({ bigSec }) => (bigSec ? "180vh" : "120vh")};
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* height: 100%; */
  margin: auto;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  border: 2px solid #fff;
  border-radius: 26px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  @media screen and (max-width: 960px) {
    /* display: flex; */
    flex-direction: ${({ imgStart }) =>
      imgStart ? "column" : "column-reverse"};
    width: 90%;
    /* height: 100%;  */
  }
`;
const breatheAnimation = keyframes`
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(100, 0);
  }
`;
export const Left = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 26px;

  /* animation: marquee 50s linear 200px; */
  /* transform: translate(-50%,-50%); */
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 26px;

  /* transform: transition(-100%, 0);
  transition: all 0.5s ease; */

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ImageAnimation = styled.div`
  /* color: #fff;
  position: absolute;

  width: 89%;
  background-color: darkmagenta;
  height: 100%;
  background-size: cover;
  background-position: center;
  align-items: center;
  top: 0;
  margin-left: -100%;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: 1; */
  /* right: 0; */
`;
export const Right = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 40%; */
  justify-content: space-evenly;
  border-radius: 26px;
  max-width: 80%;
  




  @media screen and (max-width: 960px) {
    /* display: flex;
    flex-direction: column;
    width: 100vw; */
    /* flex: 1; */
    /* align-items: center; */
    /* height: auto; */
  }
`;
export const HeadingOne = styled.h1`
  font-size: 34px;
  line-height: 34px;
  margin-bottom: 20px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#2a3b4a")};
`;
export const HeadingTwo = styled.span`
  font-size: 34px;
  line-height: 34px;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#fff" : "#2a3b4a")};
  max-width: 90%;
`;
export const Description = styled.span`
  font-size: 22px;
  line-height: 28px;
  color: #2a3b4a;
  width: 70%;
  text-align: start;
  margin-bottom: 20px;
  color: ${({ lightText }) => (lightText ? "#fff" : "#2a3b4a")};
`;
export const Button = styled.div`
  border: 1px solid #2a3b4a;
  color: ${({ btnLight }) => (btnLight ? "#2a3b4a" : "#fff")};
  background: ${({ btnLight }) => (btnLight ? "#fff" : "#2a3b4a")};
  padding: 14px 20px;
  font-weight: 800;
  font-size: 13px;
  line-height: 13px;
  cursor: pointer;

  &:hover {
    color: ${({ btnLight }) => (btnLight ? "#fff" : "#2a3b4a")};
    background: ${({ btnLight }) => (btnLight ? `${color2}` : "#fff")};
  }
`;
