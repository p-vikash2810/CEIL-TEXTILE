import React, { useState, useEffect } from "react";
import logo from "../../Images/Logo.svg";
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
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
            <FaTimes style={{ color: "#000" }} />
          ) : (
            <FaBars style={{ color: "#000" }} />
          )}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavCenter onClick={handleClick} click={click}>
            <NavItemCenter>WOVEN</NavItemCenter>
            <NavItemCenter>FINE KNITS</NavItemCenter>
            <NavItemCenter>KNITWEAR</NavItemCenter>
          </NavCenter>
          <NavRight onClick={handleClick} click={click}>
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
