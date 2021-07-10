import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;
export const NavContainer = styled.div`
  display: flex;
  height: 110px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  background: #cececa;
  

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
export const NavLeft = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 300px;
  right: calc(50% - 150px);
  top: 10px;

  & > img {
    /* background: url("https://www.cieltextile.com/themes/custom/front/assets/images/interface/logo__white.svg"); */
    height: 100%;
    color: white;
    background-repeat: no-repeat;

  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  margin-left: auto;


  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 90vh;
    position: absolute;
    top: 110px;
    right: ${({ click }) => (click ? 0 : "-350px")};
    /* opacity: 1; */
    transition: all 0.5s ease;
    background: #101522;
    z-index: 100;
    min-width: 0;
    padding: 0 10px;
  }
`;

export const MobileIcon = styled.div`

  display: block;
  position: absolute;
  top: 10px;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavCenter = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 90px;
  left: calc(50% - 150px);

  @media screen and (max-width: 960px) {
    left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 200px;
    height: 20vh;
    position: absolute;
    top: 10px;
    right: ${({ click }) => (click ? 0 : "-350px")};
    transition: all 0.5s ease;
    background: #101522;
    z-index: 150;
    min-width: 0;
  }
`;
export const NavItem = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  margin-left: 30px;

  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`;

export const NavItemCenter = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 24px;
    font-weight: 500;
  }
`;
export const NavRight = styled.div`
  /* min-width: 500px; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 250px;
  height: calc(100vh - 110px);
  position: absolute;
  /* top: 30vh; */
  top: 110px;
  right: ${({ click }) => (click ? 0 : "-350px")};
  transition: all 0.5s ease;
  background: #101522;
  z-index: 100;
  min-width: 0;
 

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 60%;
    height: 50vh;
    top: 22vh;

    justify-content: space-evenly;
    align-items: flex-start;
  }
`;
