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
          <Player className="video-player">
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
      </div>
    </div>
  );
}
