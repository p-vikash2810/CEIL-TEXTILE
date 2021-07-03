import React from "react";
import Logo from "../../Images/logo.png"

import {
  FooterSec,
  Container,
  Img,
  HeroSection,
  Left,
  LeftTop,
  LeftTopHeading,
  LeftBottom,
  MenuSec,
  MenuImage,
  MenuTag,
  Right,
  RightTop,
  RightTopHeading,
  RightBottom,
  SocialIconSec,
  SocialIcon,
  Des,
} from "./Footer.Elements";

const Footer = () => {
  return (
    <FooterSec>
      <Container>
        <Img
          src={Logo}
          alt="Footer Logo"
        />
        <HeroSection>
          <Left>
            <LeftTop>
              <LeftTopHeading>Woven</LeftTopHeading>
              <LeftTopHeading>FINE KNITS</LeftTopHeading>
              <LeftTopHeading>KNITWEAR</LeftTopHeading>
            </LeftTop>
            <LeftBottom>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2020-09/aquarelle.png" />
                <MenuTag>Aquarelle</MenuTag>
              </MenuSec>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2020-09/tropic.png"></MenuImage>
                <MenuTag>Tropic</MenuTag>
              </MenuSec>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2020-09/floreal.png"></MenuImage>
                <MenuTag>FLOREAL</MenuTag>
              </MenuSec>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2020-09/laguna.png"></MenuImage>
                <MenuTag>Laguna</MenuTag>
              </MenuSec>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2021-02/cdl.png"></MenuImage>
                <MenuTag>CDL</MenuTag>
              </MenuSec>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2020-09/fsm.png"></MenuImage>
                <MenuTag>FSM</MenuTag>
              </MenuSec>
              <MenuSec>
                <MenuImage src="https://www.cieltextile.com/sites/default/files/2020-09/cfl_2.png"></MenuImage>
                <MenuTag>CFL</MenuTag>
              </MenuSec>
            </LeftBottom>
          </Left>
          <Right>
            <RightTop>
              <RightTopHeading>ABOUT US</RightTopHeading>
              <RightTopHeading>TALENTS</RightTopHeading>
              <RightTopHeading>SUSTAINABILITY</RightTopHeading>
              <RightTopHeading>SAVOIR-FAIRE</RightTopHeading>
              <RightTopHeading>NEWS</RightTopHeading>
              <RightTopHeading>GET IN TOUCH</RightTopHeading>
            </RightTop>
            <RightBottom>
              <SocialIconSec>
                <SocialIcon src="https://www.cieltextile.com/sites/default/files/2020-10/linkdin.png" />
                <SocialIcon src="https://www.cieltextile.com/sites/default/files/2020-09/youtube-2.png" />
              </SocialIconSec>
              {/* <Des> is part of CEIL Group</Des> */}
            </RightBottom>
          </Right>
        </HeroSection>
      </Container>
    </FooterSec>
  );
};

export default Footer;
