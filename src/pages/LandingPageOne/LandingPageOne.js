import React from "react";
import { clusterObjOne, clusterObjTwo, clusterObjThree } from "./Data";
import ClusterSection from "../../components/ClusterSection/ClusterSection";

import { Container } from "./LandingPageOne.Elements"

const LandingPageOne = () => {
  return (
    <Container>
      <ClusterSection {...clusterObjOne} />
      <ClusterSection {...clusterObjTwo} />
      <ClusterSection {...clusterObjThree} />
    </Container>
  );
};

export default LandingPageOne;
