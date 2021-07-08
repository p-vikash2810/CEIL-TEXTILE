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
  NavMenu,
} from "./Navbar.Elements";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

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
      <NavContainer style={{ display: `${showNav ? "flex" : "none"}` }}>
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
      {/* <Video autoPlay muted loop playsInline>
        <source
          src="https://www.cieltextile.com/sites/default/files/2020-08/Ciel%20Overview%20Short%20Version%20v4%20Compress.mp4"
          type="video/mp4"
        ></source>
      </Video> */}
    </Nav>
  );
};

export default Navbar;
