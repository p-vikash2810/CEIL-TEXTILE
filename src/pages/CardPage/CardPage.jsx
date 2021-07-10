import React from "react";
// import { CardPageContainer, CardPageWrapper } from "./CardPage.styles";
import Card from "../../components/Card/Card";
import { CardData } from "./CardData";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination, Navigation]);

const CardPage = () => {
  return (
    <>
      {/* <CardPageContainer>
        <CardPageWrapper> */}
      <div className="swiperBody">
        <Swiper
          effect={"coverflow"}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          // spaceBetween={30}
          className="mySwiper"
        >
          {CardData.map((cardDetail) => (
            <SwiperSlide style={{ width: "300px" }}>
              <Card cardDetail={cardDetail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* </CardPageWrapper>
      </CardPageContainer> */}
    </>
  );
};

export default CardPage;
