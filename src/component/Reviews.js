import React from "react";
import reviewpic from "../Images/Group 91.png";
export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews-box">
        <div className="first-box">
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
          {/* <div>
            <div className="review-back-img"></div>
          </div> */}
        </div>
        <div className="review-img-box">
          <img className="review-img" src={reviewpic} alt="" />
          {/* <div className="review-img"></div> */}
        </div>
      </div>
    </div>
  );
}
