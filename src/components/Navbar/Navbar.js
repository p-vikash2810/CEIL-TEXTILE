import React, { useState, useEffect } from "react";
import logo from "../../Images/logo_white.png";
import { FaTimes, FaBars } from "react-icons/fa";

import {
  Nav,
  NavContainer,
  NavLeft,
  NavCenter,
  NavItemCenter,
  NavItem,
  NavRight,
  Video,
  MobileIcon,
  NavMenu
} from "./Navbar.Elements";

const Navbar = () => {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);
  return (
    <Nav>
      <NavContainer>
        <NavLeft>
          <img src={logo} alt="nav_logo" />
        </NavLeft>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavCenter>
            <NavItemCenter>WOVEN</NavItemCenter>
            <NavItemCenter>FINE KNITS</NavItemCenter>
            <NavItemCenter>KNITWEAR</NavItemCenter>
          </NavCenter>
          <NavRight>
            <NavItem>ABOUT US</NavItem>
            <NavItem>TALENTS</NavItem>
            <NavItem>SUSTAINABILITY</NavItem>
            <NavItem>SAVOIR-FAIRE</NavItem>
            <NavItem>NEWS</NavItem>
            <NavItem>GET IN TOUCH</NavItem>
          </NavRight>
        </NavMenu>
      </NavContainer>
      <Video autoPlay muted loop playsInline>
        <source
          src="https://redirector.googlevideo.com/videoplayback?expire=1625289650&ei=Up_fYLO-B46TyQXXpIiQBw&ip=196.245.183.200&id=o-AOWIdcMkkR-s2rSkOZroWE9S7rGIgrFLH4sF2iLRygvY&itag=22&source=youtube&requiressl=yes&mh=gZ&mm=31%2C29&mn=sn-5hnekn76%2Csn-5hne6n7e&ms=au%2Crdu&mv=u&mvi=5&pl=24&vprv=1&mime=video%2Fmp4&ns=2oZynwSULuT8lQ3ZOJNX_msG&cnr=14&ratebypass=yes&dur=731.916&lmt=1614487959139139&mt=1625267592&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=1311222&n=7-RNF7TC4LEizM&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIhAL2i0oWPVSJ9UfS8heUCV9AIFU5T9dGQIC-JVTB_xN2WAiAE-0ip3FlE2zdI49oWFhjAxdoy60OdYh_Xrh_7_YgATg%3D%3D&sig=AOq0QJ8wRQIhANVwCaCukKq5B74pSID19LGuwNZnS0BfzBeCG95djbRyAiBrrwMVXTdzgWT85o0yfKh3Jfmd4_AD6HKgNUC-O2d1NQ==&title=Sunny+International+Limited+%7C+sunnyil.com"
          type="video/mp4"
        ></source>
      </Video>
    </Nav>
  );
};

export default Navbar;
