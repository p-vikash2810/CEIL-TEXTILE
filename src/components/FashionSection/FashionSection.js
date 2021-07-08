import React from "react";

import {
  FashionSec,
  Container,
  Left,
  Image,
  ImageAnimation,
  Right,
  HeadingOne,
  HeadingTwo,
  Description,
  // Button,
} from "./FashionSection.Elements";
import CustomButton from "../custom-button/custom-button.component";


const FashionSection = ({
  imageSrc,
  headingOne,
  headingTwo,
  description,
  buttonTag,
  lightBg,
  bigSec,
  imgStart,
  lightText,
  btnLight
}) => {
  return (
    <FashionSec lightBg={lightBg} bigSec={bigSec}>
      <Container imgStart={imgStart}>
        <Left>
          <ImageAnimation></ImageAnimation>
          <Image src={imageSrc} />

        </Left>
        <Right>
          <HeadingOne lightText={lightText}>{headingOne}</HeadingOne>
          <HeadingTwo lightText={lightText}>{headingTwo}</HeadingTwo>
          <Description lightText={lightText}>{description}</Description>
          <CustomButton btnLight={btnLight}>{buttonTag}</CustomButton>
        </Right>
      </Container>
    </FashionSec>
  );
};

export default FashionSection;
