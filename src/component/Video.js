import React, { useEffect, useState } from "react";
import gridpic from "../Images/Group 87.svg";

import ReactPlayer from "react-player";

export default function Video() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    
  }, []);

  return (
    <div className="video">
      <div
        className="video1 "
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <div>VIDEO</div>
      </div>
      <div className="video2">
        <img src={gridpic} alt="" />
      </div>
      <div className="video3">
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
