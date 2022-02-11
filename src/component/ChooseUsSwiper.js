import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export default function ChooseUsSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        style={{ paddingBottom: "40px" }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {[...Array(3)].map((star, index) => (
          <div key={index}>
            <SwiperSlide className="swiper-box" >
              <div className="tops1">TOPS</div>
              <div className="tops2"></div>
              <div className="tops3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-box">
              <div className="tops1">BOTTOMS</div>
              <div className="bottoms2"></div>
              <div className="tops3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-box">
              <div className="tops1">HOODIE & JACKET</div>
              <div className="hoodies2"></div>
              <div className="tops3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-box">
              <div className="tops1">ACCESSORIES</div>
              <div className="accessories2"></div>
              <div className="tops3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
