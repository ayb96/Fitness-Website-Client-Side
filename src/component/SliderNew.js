import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function SliderNew() {
  const fadeImages = [
    {
      url: "https://images.pexels.com/photos/28054/pexels-photo-28054.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "First Slide",
      title: "Slider Title 1",
    },
    {
      url: "https://images.pexels.com/photos/4164658/pexels-photo-4164658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: " Second Slide",
      title: "Slider Title 2",
    },
    {
      url: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Third Slide",
      title: "Slider Title 3",
    },
  ];
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        speed={1000}
        parallax={true}
        // autoplay= {5000}
        spaceBetween={30}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className=" slider-new"
      >
        {fadeImages.map((obj, index) => (
          <SwiperSlide key={index}>
            <div className="slider-content ">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div data-swiper-parallax="-600">{obj.caption}</div>
                <div data-swiper-parallax="-500">{obj.title}</div>
                <div data-swiper-parallax="-400">Description Here</div>
                <div className="join-text-out" data-swiper-parallax="-300">
                  <div id="join-text">JOIN US NOW</div>
                </div>
                <div id="join-box"></div>
              </div>
              <div className="slider-content-sub2"></div>
            </div>
            <div
              slot="container-start"
              style={{
                "background-image": `url(${obj.url})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                position: "absolute",
                zIndex: "10",
              }}
            ></div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
        <div className="slider-content ">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div data-swiper-parallax="-600">caption</div>
                <div data-swiper-parallax="-500">Slider title2</div>
                <div  data-swiper-parallax="-400">Description Here</div>
                <div className="join-text-out" data-swiper-parallax="-300">
                  <div id="join-text">JOIN US NOW</div>
                </div>
                <div id="join-box"></div>
              </div>
              <div className="slider-content-sub2"></div>
            </div>
        <div
          slot="container-start"
          style={{
            "background-image":
              "url(https://images.pexels.com/photos/6739958/pexels-photo-6739958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
             width:"100%",
             height:"100%",
              position:"absolute", 
              zIndex:"10"      
          }}
        
        ></div>
       
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-content ">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div data-swiper-parallax="-600">caption</div>
                <div data-swiper-parallax="-500">Slider title3</div>
                <div  data-swiper-parallax="-400">Description Here</div>
                <div className="join-text-out" data-swiper-parallax="-300">
                  <div id="join-text">JOIN US NOW</div>
                </div>
                <div id="join-box"></div>
              </div>
              <div className="slider-content-sub2"></div>
            </div>
        <div
          slot="container-start"
          style={{
            "background-image":
              "url(https://images.pexels.com/photos/6739958/pexels-photo-6739958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
             width:"100%",
             height:"100%",
              position:"absolute", 
              zIndex:"10"      
          }}
        
        ></div>
       
          
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
