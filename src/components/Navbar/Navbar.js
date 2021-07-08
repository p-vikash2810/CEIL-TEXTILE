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
  MobileIcon,
  NavMenu,
} from "./Navbar.Elements";

const Navbar = () => {
  // const [showNav, setShowNav] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const controlNavbar = () => {
  //   if (window.scrollY > 100) {
  //     setShowNav(false);
  //   } else {
  //     setShowNav(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

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

  const [shouldShowActions, setShouldShowActions] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      yPos > 100 && setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <Nav>
      <NavContainer
        style={{
          display: shouldShowActions ? "flex" : "none",
        }}
      >
        <NavLeft>
          <img src={logo} alt="nav_logo" />
        </NavLeft>
        <MobileIcon onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: "#fff" }} />
          ) : (
            <FaBars style={{ color: "#fff" }} />
          )}
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
    </Nav>
  );
};

export default Navbar;
