import React, { useEffect, useState } from "react";

import progressionIcon from "../Images/16-express.svg";
import workoutIcon from "../Images/XMLID_1490_.svg";
import nutritionIcon from "../Images/clipboard.svg";
import progression2Icon from "../Images/16-express(1).svg";
import workout2Icon from "../Images/XMLID_1490_(1).svg";
import nutrition2Icon from "../Images/clipboard(1).svg";
export default function Category() {
                  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (window.innerWidth > 950) {
      setOffsetY(window.pageYOffset);
      return;
    }
    setOffsetY(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Category">
      <div
        className="progression"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <div className="progression-box">
          <div className="progression-box1">
            <div></div>
          </div>
          <div className="progression-box2">PROGRESSION</div>
          <div className="progression-box3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </div>
        <img src={progression2Icon} alt="" className="back-image" />
      </div>
      <div
        className="workout"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        <div className="workout-box">
          <div className="workout-box1">
            <img src={workoutIcon} alt="" />
          </div>
          <div className="workout-box2">
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </div>
          <div className="workout-box3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </div>
        <img src={workout2Icon} alt="" className="back-image" />
      </div>
      <div
        className="nutrition"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="nutrition-box">
          <div className="nutrition-box1">
            <img src={nutritionIcon} alt="" />
          </div>
          <div className="nutrition-box2">NUTRITION</div>
          <div className="nutrition-box3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </div>
        <img src={nutrition2Icon} alt="" className="back-image" />
      </div>
    </div>
  );
}
