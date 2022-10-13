import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "./SwiperImg.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperImg(props) {
  return (
    <Swiper
      slidesPerView={1}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="swiper"
    >
      {props.list.map((el, i) => (
        <SwiperSlide key={i} className="swiper-slide">
          <img src={"https://shikimori.one" + el.original} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperImg;
