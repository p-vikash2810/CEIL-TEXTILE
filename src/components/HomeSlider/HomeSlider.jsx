import React, { useState, useRef, useEffect } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from "./home-slider.styles";
import { ioArrowForward, ioArrowBack } from "react-icons/io5";

const HomeSlider = ({ SliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
        clearTimeout(timeout.current);
      }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
        clearTimeout(timeout.current);
      }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  // console.log(SliderData);
  return (
    <HeroSection>
      <HeroWrapper>
        {SliderData.map((data, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImage src={data.imageUrl} alt={data.alt} />
                <HeroContent>
                  <h1>{data.title}</h1>
                  <p>{data.subTitle}</p>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default HomeSlider;
