import React, { useState } from "react";

import {
  ClusterSec,
  BackgroundImg,
  Container,
  HeadLineSec,
  HeadLine,
  Line,
  Description,
  TagSection,
  TagLine,
  TagImg,
  TagHeading,
  Button,
  ButtonIcon,
  Wrapper,
} from "./ClusterSection.Elements";
import CustomButton from "../custom-button/custom-button.component";

const ClusterSection = ({
  backgroundImageLink,
  headLine,
  description,
  tagOne,
  iconOneUrl,
  tagTwo,
  iconTwoUrl,
  tagThree,
  iconThreeUrl,
  buttonTag,
}) => {
  //   const [click, setClick] = useState(false);
  //   const mouseEnter = () => setClick(() => console.log("mouse enter"));
  //   const mouseLeave = () => setClick(() => console.log("mouse leave"));

  return (
    <ClusterSec>
      <BackgroundImg
        // src={backgroundImageLink}
        style={{ backgroundImage: `url(${backgroundImageLink})` }}
      />
      <Wrapper>
        <Container>
          <HeadLineSec>
            <HeadLine>{headLine}</HeadLine>
            <Line className="line"></Line>
          </HeadLineSec>
          <Description>{description}</Description>
          <TagSection>
            <TagLine>
              <TagImg src={iconOneUrl} alt="" />
              <TagHeading>{tagOne}</TagHeading>
            </TagLine>
            <TagLine>
              <TagImg src={iconTwoUrl} alt="" />
              <TagHeading>{tagTwo}</TagHeading>
            </TagLine>
            <TagLine>
              <TagImg src={iconThreeUrl} />
              <TagHeading>{tagThree}</TagHeading>
            </TagLine>
          </TagSection>
        </Container>
        <Button>{buttonTag}</Button>
        <ButtonIcon src="https://www.cieltextile.com/themes/custom/front/assets/images/icons/arrow--right.png" />
      </Wrapper>
    </ClusterSec>
  );
};

export default ClusterSection;
