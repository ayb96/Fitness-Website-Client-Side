import React from "react";
import gridpic from "../Images/Group 87.svg";
import normalpic from "../Images/Rectangle 28.png";
export default function Video() {
  return (
    <div className="video">
      <div className="video1">
        <div>VIDEO</div>
      </div>
      <div className="video2">
        <img src={gridpic} alt="" />
      </div>
      <div className="video3">
        <div className="video3-content">
          {/* <img src={normalpic} alt=""></img>
          <div className="video32"></div> */}
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
