import styled from "styled-components";
import { color1, color2 } from "../../globalStyles";

export const ClusterSec = styled.div`
  flex: 1/3;
  /* background: url("https://www.cieltextile.com/sites/default/files/styles/cluster_homapage_640x1080_/public/2020-10/1219_Ciel_D05_OC_S9_0117%20-%20Copy_0.jpg?h=ee9a606a&itok=uAkj7W0w"); */
  /* backface-visibility: hidden; */
  /* -webkit-backface-visibility: hidden; */
  background-color: ${color1};
  object-fit: cover;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid #fff;
  position: relative;
  background: rgb(107, 102, 99);
  background: linear-gradient(
    50deg,
    rgba(107, 102, 99, 1) 20%,
    rgba(227, 224, 222, 1) 100%
  );

  &:hover {
    /* background: url("https://www.cieltextile.com/sites/default/files/styles/cluster_homapage_640x1080_/public/2020-10/1219_Ciel_D05_OC_S9_0117%20-%20Copy_0.jpg?h=ee9a606a&itok=uAkj7W0w"); */
    /* background-blend-mode: lighten; */
    /* cursor: pointer; */
    /* background: rgba(255,255,255,.7); */
    transform: translate(0px);

    background: transparent;
    /* &::before {
      flex: 1/3;
      width: 100%;
      height: 100vh;
      background-image: url("https://www.cieltextile.com/sites/default/files/styles/cluster_homapage_640x1080_/public/2020-10/1219_Ciel_D05_OC_S9_0117%20-%20Copy_0.jpg?h=ee9a606a&itok=uAkj7W0w");
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      opacity: 0.3;
      color: #fff;

      @media screen and (max-width: 960px) {
        height: 100%;
      }
    } */
    & > div {
      display: flex;
      /* align-items: center; */
    }

    & > div > div > div > h1,
    div > div > span {
      color: ${color1};
    }

    & > div > span {
      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
      color: ${color1};

      @media screen and (max-width: 960px) {
        display: none;
      }
    }
    & > div > button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #2a3b4a;
      /* background: #fff; */
      border: 3px solid #2a3b4a;
      border-radius: 5px;
      position: relative;
      z-index: 1;
      transition: ease-out 0.3s;
      outline: none;

      &:hover {
        /* background: ${color1}; */
        color: #fff;
        /* z-index: 1; */
      }
      &::before {
        transition: 0.5s all ease;
        position: absolute;
        top: 0;
        left: 50%;
        right: 50%;
        bottom: 0;
        opacity: 0;
        content: "";
        background-color: #2a3b4a;
      }

      &:hover::before {
        transition: 0.5s all ease;
        top: 0;
        right: 0;
        opacity: 1;
        z-index: -1;
      }

      @media screen and (max-width: 960px) {
        display: none;
      }
    }

    & > div > div {
      &:first-child {
        .line {
          border-bottom: 1px solid #2a3b4a;
        }
      }
    }

    /* & > div > div > span {
      color: #2a3b4a;
    } */
    /* & > div > div > div > span {
      color: #2a3b4a;
    } */
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 300px;
    background: #fff;
    overflow: hidden;

    &:hover {
      background: #c0cccc;
    }

    /* &::before {
      flex: 1/3;
      width: 100%;
      height: 100%;
      background-image: url("https://www.cieltextile.com/sites/default/files/styles/cluster_homapage_640x1080_/public/2020-10/1219_Ciel_D05_OC_S9_0117%20-%20Copy_0.jpg?h=ee9a606a&itok=uAkj7W0w");
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      opacity: 0.3;
      color: #fff;
    } */
  }
`;

export const BackgroundImg = styled.div`
  flex: 1/3;
  width: 100%;
  height: 100vh;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;
  background-size: cover;
  background-position: center;
  color: #fff;
  display: none;

  @media screen and (max-width: 960px) {
    /* height: 300px; */
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    overflow: hidden;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  align-self: bottom;

  @media screen and (max-width: 960px) {
    align-items: flex-end;
    height: 100%;
    flex-direction: row;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 1;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  align-self: bottom;
  /* backdrop-filter: blur(10px); */

  @media screen and (max-width: 960px) {
    align-items: flex-start;
    height: 100%;
  }
`;
export const HeadLineSec = styled.div`
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 100px; */
`;
export const HeadLine = styled.h1`
  opacity: 1;
  color: #fff;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 30px;

  @media screen and (max-width: 960px) {
    margin-bottom: 5px;
    color: #2a3b4a;
  }
`;
export const Line = styled.div`
  width: 50px;
  color: #fff;
  border-bottom: 1px solid #fff;

  @media screen and (max-width: 960px) {
    border-bottom: 1px solid #2a3b4a;
  }
`;
export const Description = styled.span`
  font-weight: 300;
  font-size: 22px;
  line-height: 30px;
  color: #fff;
  width: 60%;
  margin-bottom: 20px;
  /* display: none; */
  color: transparent;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const TagSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  /* align-items: center; */
  /* margin: auto; */

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
  }
`;
export const TagLine = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    margin-bottom: 5px;
  }
`;
export const TagImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
export const TagHeading = styled.span`
  font-weight: 400;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 30px;
  color: #fff;

  @media screen and (max-width: 960px) {
    color: #2a3b4a;
  }
`;
export const Button = styled.button`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  background: #fff;
  color: #2a3b4a;
  border: 1px solid #2a3b4a;
  height: 50px;
  line-height: 50px;
  width: 120px;
  /* display: none; */
  color: transparent;
  background: transparent;
  border: none;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    background: #2a3b4a;
    color: #fff;
    /* z-index: 1; */
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 0;
  }
`;

export const ButtonIcon = styled.img`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    margin-bottom: 30px;
    margin-right: 20px;
    color: #fff;
    /* background: #fff; */
  }
`;
