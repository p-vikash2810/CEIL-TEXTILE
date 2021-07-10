import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;
export const NavContainer = styled.div`
  display: flex;
  height: 70px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  /* margin: 0 50px; */
  z-index: 100;
  position: fixed;
  background: #cececa;
  /* transition: all ease-out 0.4s; */
  /* transition-duration: 0.4s; */

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
export const NavLeft = styled.div`
/* align-items: center; */
  /* flex: 0.18; */
  & > img {
    /* background: url("https://www.cieltextile.com/themes/custom/front/assets/images/interface/logo__white.svg"); */
    width: 20vw;
    height: 100%;
    color: white;
    background-repeat: no-repeat;

    @media screen and (max-width: 960px) {
      width: 50vw;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  margin-left: auto;
  /* min-width: 850px; */
  /* position: absolute; */
  /* z-index: 100; */

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-self: flex-end; */
    align-items: flex-start;
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    /* opacity: 1; */
    transition: all 0.5s ease;
    background: #101522;
    z-index: 100;
    min-width: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } ;
`;

export const NavCenter = styled.div`
  width: 26%;
  min-width: 220px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 24%;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 30px;
    /* height: 55%; */
    /* position: absolute; */
    /* top: 80px; */
    /* left: ${({ click }) => (click ? 0 : "-100%")}; */
    /* opacity: 1; */
    /* transition: all 0.5s ease; */
    /* background: #101522; */
  }
`;
export const NavItem = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 14px;
  color: #403e3d;
  cursor: pointer;
  /* margin-left: 30px; */

  @media screen and (max-width: 960px) {
    font-size: 24px;
    font-weight: 300;
  }
`;

export const NavItemCenter = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  color: #403e3d;
  /* margin-left: 30px; */

  @media screen and (max-width: 960px) {
    font-size: 24px;
    font-weight: 500;
  }
`;
export const NavRight = styled.div`
  width: 62%;
  min-width: 500px;
  display: flex;
  justify-content: space-between;

  /* display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 30px; */

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 30px;
    /* height: 55%; */
    /* position: absolute; */
    /* top: 80px; */
    /* left: ${({ click }) => (click ? 0 : "-100%")}; */
    /* opacity: 1; */
    /* transition: all 0.5s ease; */
    /* background: #101522; */
  }
`;

export const Video = styled.video`
  /* position: absolute; */
  width: 100vw;
  height: auto;
  top: 0px;
  z-index: -1;
  /* float: left; */
  /* display: block; */
  /* position: inherit; */
  /* width: max-content; */
  /* box-sizing: border-box; */
`;
