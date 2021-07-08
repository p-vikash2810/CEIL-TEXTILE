import React from "react";

import { CardSec, CardHeader, CardDes, CardContent } from "./Card.styles";
import CustomButton from "../custom-button/custom-button.component";

const Card = ({ cardDetail }) => {
  return (
    <CardSec style={{ backgroundImage: `url(${cardDetail.cardBAckImage})` }}>
      <CardContent>
        <CardHeader>{cardDetail.cardHeader}</CardHeader>
        <CardDes>{cardDetail.cardDes}</CardDes>
        <CustomButton>Show More</CustomButton>
      </CardContent>
    </CardSec>
  );
};

export default Card;
