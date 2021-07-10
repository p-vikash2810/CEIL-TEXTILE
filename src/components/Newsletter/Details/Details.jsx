import React from "react";
import { DetailContainer, HeadingOne, HeadingTwo, Description } from "./Details.styles";
import { Button } from "../../custom-button/custom-button.styles";

const Details = ({fashionObjOne}) => {
  return (
    <DetailContainer>
      <HeadingOne lightText={fashionObjOne.lightText}>{fashionObjOne.headingOne}</HeadingOne>
      <HeadingTwo lightText={fashionObjOne.lightText}>{fashionObjOne.headingTwo}</HeadingTwo>
      <Description lightText={fashionObjOne.lightText}>{fashionObjOne.description}</Description>
      <Button >{fashionObjOne.buttonTag}</Button>
    </DetailContainer>
  );
};

export default Details;
