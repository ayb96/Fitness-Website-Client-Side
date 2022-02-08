import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import sliderImage from "../Images/Group 13.png";

export default function Slider() {
  const slideImages = [
    {
      image: sliderImage,
    },
  ];
  const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    prevArrow: (
      <div
      className="leftarrown-container"
       
      >
        <svg
          
          className="leftarrown"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="21"
          viewBox="0 0 7.549 12.225"
        >
          <path
            id="Icon_material-keyboard-arrow-right"
            data-name="Icon material-keyboard-arrow-right"
            d="M12.885,19.413l4.666-4.676-4.666-4.676,1.436-1.436,6.112,6.112L14.321,20.85Z"
            transform="translate(20.434 20.85) rotate(-180)"
            fill="#fff"
          />
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        style={{
          width: "70px",
          
          position: "absolute",
          right: "0",

        }}
      >
        <svg
          style={{ marginRight: "20px", cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="21"
          viewBox="0 0 7.549 12.225"
        >
          <path
            id="Icon_material-keyboard-arrow-right"
            data-name="Icon material-keyboard-arrow-right"
            d="M12.885,19.413l4.666-4.676-4.666-4.676,1.436-1.436,6.112,6.112L14.321,20.85Z"
            transform="translate(-12.885 -8.625)"
            fill="#fff"
          />
        </svg>
      </div>
    ),
  };

  return (
    <div className="slide-show" style={{ border: "1px red solid" }}>
      <Slide style={{ height: "630px" }} {...properties}>
        {slideImages.map((obj, index) => {
          return (
            <div
              key={obj.index}
              className="each-slide slider"
              style={{ height: "630px" }}
            ></div>
          );
        })}
      </Slide>
      <div className="slider-content">
        <div className="slider-content-sub1"></div>
        <div className="slider-content-sub">
          <div>Tageline here</div>
          <div>Title Here</div>
          <div>Description Here</div>
          <div>
            <div id="join-text">JOIN US NOW</div>
          </div>
          <div id="join-box"></div>
        </div>
        <div className="slider-content-sub2"></div>
      </div>
    </div>
  );
}
