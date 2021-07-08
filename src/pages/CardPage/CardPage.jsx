import React from "react";
import { CardPageContainer, CardPageWrapper } from "./CardPage.styles";
import Card from "../../components/Card/Card";
import { CardData } from "./CardData";

const CardPage = () => {
  return (
    <CardPageContainer>
      <CardPageWrapper>
        {CardData.map((cardDetail) => (
          <Card cardDetail={cardDetail} />
        ))}
      </CardPageWrapper>
    </CardPageContainer>
  );
};

export default CardPage;
