import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function SwiperChoose() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        // slidesPerView={window.innerWidth > 1268 ? 4 : "auto"}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-box">
          <div className="tops1">TOPS</div>
          <div className="tops2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">BOTTOMS</div>
          <div className="bottoms2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">HOODIE & JACKET</div>
          <div className="hoodies2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">ACCESSORIES</div>
          <div className="accessories2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">TOPS</div>
          <div className="tops2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">BOTTOMS</div>
          <div className="bottoms2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">HOODIE & JACKET</div>
          <div className="hoodies2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-box">
          <div className="tops1">ACCESSORIES</div>
          <div className="accessories2"></div>
          <div className="tops3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
