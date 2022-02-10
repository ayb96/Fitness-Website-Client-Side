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
