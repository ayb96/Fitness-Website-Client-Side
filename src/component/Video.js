import React from "react";
import gridpic from "../Images/Group 87.svg";
import normalpic from "../Images/Rectangle 28.png";
import { Player } from "video-react";
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
          {/* <video width="320" height="240" loop controls autoPlay>
            <source src="../Videos/review.mp4" type="video/mp4" />
          </video> */}
          <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
          {/* <video
            src="../Videos/review.mp4"
            width="600"
            height="300"
            controls="controls"
            autoplay="true"
          /> */}
        </div>
      </div>
    </div>
  );
}
