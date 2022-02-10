import React from "react";
import gridpic from "../Images/Group 87.svg";

import ReactPlayer from "react-player";
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
        {/* <div className="video3-content">
          <Player className="video-player">
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div> */}
        <div className="video3-content">
          <ReactPlayer
            className="video-player"
            url="https://youtu.be/CH50zuS8DD0"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}
