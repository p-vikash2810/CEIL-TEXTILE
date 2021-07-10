import React from "react";
import { Container } from "./TalentPage.styles";
import Newsletter from "../../components/Newsletter/Newsletter";
import { fashionObjOne, fashionObjTwo, fashionObjThree } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFlip, Pagination, Navigation]);

const TalentPage = () => {
  return (
    <Container>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        // pagination={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Newsletter fashionObjOne={fashionObjOne} />
        </SwiperSlide>
        <SwiperSlide>
          <Newsletter fashionObjOne={fashionObjTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <Newsletter fashionObjOne={fashionObjThree} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default TalentPage;
