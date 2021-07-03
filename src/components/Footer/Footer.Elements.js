import styled from "styled-components";

export const FooterSec = styled.div`
  width: 100vw;
  height: 300px;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    height: 500px;
  }
`;
export const Container = styled.div`
  width: 95vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;
export const Img = styled.img`
  width: 450px;
  height: 30px;

  @media screen and (max-width: 960px) {
    width: 250px;
    height: 20px;
  }
`;
export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 35%; */
  width: 450px;

  @media screen and (max-width: 1170px) {
    width: 370px;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin-bottom: 40px;
  }
`;
export const LeftTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LeftTopHeading = styled.div`
  display: flex;
  font-size: 18px;
  width: 145px;
  line-height: 14px;
  font-weight: 700;
  color: #2a3b4a;
  background-color: transparent;
  text-decoration: none;
  border-bottom: 2px solid white;
  padding-bottom: 15px;
  text-transform: uppercase;

  @media screen and (max-width: 1170px) {
    width: 110px;
  }

  @media screen and (max-width: 960px) {
    font-size: 18px;
    width: auto;
  }
`;
export const LeftBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const MenuSec = styled.div`
  display: flex;
  width: 130px;
  margin-right: 13px;
  margin-top: 10px;

  @media screen and (max-width: 1170px) {
    width: 90px;
  }
  @media screen and (max-width: 960px) {
    width: 30%;
  }
`;
export const MenuImage = styled.img``;
export const MenuTag = styled.div`
  margin-left: 5px;
  color: #2a3b4a;
  font-weight: 300;
  font-size: 17px;

  @media screen and (max-width: 1170px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1170px) {
    font-size: 22px;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  align-items: flex-end;

  @media screen and (max-width: 1170px) {
    width: 600px;
  }
  @media screen and (max-width: 960px) {
    width: 90vw;
    align-items: center;
  }
`;
export const RightTop = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 1170px) {
    width: 500px;
    justify-content: flex-end;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
`;
export const RightTopHeading = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid white;
  color: #2a3b4a;
  margin-right: 5px;
  align-items: flex-end;
  align-self: flex-end;
  align-content: flex-end;

  @media screen and (max-width: 1170px) {
    margin-right: 15px;
  }
`;
export const RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
  }
`;
export const SocialIconSec = styled.div`
  display: flex;
  align-items: flex-end;
  width: 60px;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;
export const SocialIcon = styled.img`
  border-bottom: 2px solid white;
  padding-bottom: 15px;
`;
export const Des = styled.div`
  margin-top: 20px;
  color: #2a3b4a;
  font-size: 18px;
`;
