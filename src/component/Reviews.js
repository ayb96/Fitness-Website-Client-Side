import React, { useEffect } from "react";
import reviewpic from "../Images/Group 91.png";
import sliderImage from "../Images/Group 13.png";
import ReviewSwiper from "./ReviewSwiper";
import Rellax from "rellax";
export default function Reviews() {
  // var rellax = new Rellax(".rellax");
  useEffect(() => {
    var rellax = new Rellax(".rellax", {
      speed: -1,
      center: true,
      wrapper: null,
      round: false,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className="reviews">
      <div className="reviews-box">
        {/* <div className="first-box">
          <div className="box1">TESTIMONIAL</div>
          <div className="box2">Reviews From YOU</div>
          <div className="box"></div>
          <div className="box3">
            <div>Nutritionist</div> <div className="review-back-img"></div>
          </div>
          <div className="box4">JEREMY GEORGE</div>
          <div className="box5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata.
          </div>
          <div className="box7">
            <div className="box7-box1"></div>
            <div className="box7-box2"></div>
          </div>
          
        </div> */}
        <ReviewSwiper />

        <div
          className="review-img-box rellax"
          // data-rellax-speed="-4"
          // data-rellax-xs-speed="0"
        >
          <img
            className="review-img"
            src={reviewpic}
            alt=""
            data-rellax-xs-speed="0"
            data-rellax-mobile-speed="0"
            //  data-rellax-xs-speed="-10"
          />
        </div>
      </div>
    </div>
  );
}
