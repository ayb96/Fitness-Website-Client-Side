import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper";

export default function ReviewSwiper() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",

          maxWidth: "500px",
        }}
        speed={1000}
        parallax={true}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper review-swiper"
      >
        <SwiperSlide>
          <div className="text" data-swiper-parallax="-100">
            <div className="box1" data-swiper-parallax="-600">
              TESTIMONIAL
            </div>
            <div className="box2" data-swiper-parallax="-500">
              Reviews From YOU
            </div>
            <div className="box" data-swiper-parallax="-400"></div>
            <div className="box3" data-swiper-parallax="-300">
              <div>Nutritionist</div> <div className="review-back-img"></div>
            </div>
            <div className="box4" data-swiper-parallax="-200">
              JEREMY GEORGE
            </div>
            <div className="box5" data-swiper-parallax="-100">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box6" data-swiper-parallax="-50">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
            </div>
            <div
              style={{
                width: "70px",
                height: "70px",

                marginTop: "20px",
              }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text" data-swiper-parallax="-100">
            <div className="box1" data-swiper-parallax="-600">
              TESTIMONIAL
            </div>
            <div className="box2" data-swiper-parallax="-500">
              Reviews From YOU
            </div>
            <div className="box" data-swiper-parallax="-400"></div>
            <div className="box3" data-swiper-parallax="-300">
              <div>Nutritionist</div> <div className="review-back-img"></div>
            </div>
            <div className="box4" data-swiper-parallax="-200">
              JEREMY GEORGE
            </div>
            <div className="box5" data-swiper-parallax="-100">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box6" data-swiper-parallax="-50">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text" data-swiper-parallax="-100">
            <div className="box1" data-swiper-parallax="-600">
              TESTIMONIAL
            </div>
            <div className="box2" data-swiper-parallax="-500">
              Reviews From YOU
            </div>
            <div className="box" data-swiper-parallax="-400"></div>
            <div className="box3" data-swiper-parallax="-300">
              <div>Nutritionist</div> <div className="review-back-img"></div>
            </div>
            <div className="box4" data-swiper-parallax="-200">
              JEREMY GEORGE
            </div>
            <div className="box5" data-swiper-parallax="-100">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box6" data-swiper-parallax="-50">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
