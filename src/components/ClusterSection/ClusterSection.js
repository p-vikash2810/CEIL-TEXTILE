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
  ButtonIcon
} from "./ClusterSection.Elements";

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
      style={{backgroundImage: `url(${backgroundImageLink})`}} />
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
            <TagImg src={iconThreeUrl} alt="" />
            <TagHeading>{tagThree}</TagHeading>
          </TagLine>
        </TagSection>
       
      </Container>
      <Button>{buttonTag}</Button>
      <ButtonIcon src="https://www.cieltextile.com/themes/custom/front/assets/images/icons/arrow--right.png" />
    </ClusterSec>
  );
};

export default ClusterSection;
