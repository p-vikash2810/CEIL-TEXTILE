import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { SliderData } from "./SliderData";

const HomePage = () => {
  return (
    <div>
      <HomeSlider SliderData={SliderData} />
    </div>
  );
};

export default HomePage;
