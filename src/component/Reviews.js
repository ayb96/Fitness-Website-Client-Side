import React from "react";
import reviewPicture from "../Images/Group 91.png";
import star from "../Images/Icon awesome-star.png";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews-box">
        <div className="first-box">
          <div className="box1">TESTIMONIAL</div>
          <div className="box2">Reviews From YOU</div>
          <div className="box"></div>
          <div className="box3">Nutritionist</div>
          <div className="box4">JEREMY GEORGE</div>
          <div className="box5"></div>
          <div className="box6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata.
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <img src={reviewPicture} alt="" />
        </div>
      </div>
    </div>
  );
}
