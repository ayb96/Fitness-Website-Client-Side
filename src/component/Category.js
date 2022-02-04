import React from "react";

import progressionIcon from "../Images/16-express.png";
import workoutIcon from "../Images/XMLID_1490_.png";
import nutritionIcon from "../Images/clipboard.png";
import progression2Icon from "../Images/16-express@2x.png";
import workout2Icon from "../Images/XMLID_1490_@2x.png";
import nutrition2Icon from "../Images/clipboard@2x.png";
export default function Category() {
  return (
    <div className="Category">
      <div className="progression">
        <div className="progression-box">
          <div>
            <img src={progressionIcon} alt="" />
          </div>
          <div>PROGRESSION</div>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </div>
        <img src={progression2Icon} alt="" className="back-image"/>
      </div>
      <div className="workout">
        <div className="workout-box">
          <div>
            <img src={workoutIcon} alt="" />
          </div>
          <div>WORKOUT</div>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </div>
        <img src={workout2Icon} alt="" className="back-image"/>
      </div>
      <div className="nutrition">
        <div className="nutrition-box">
          <div>
            <img src={nutritionIcon} alt="" />
          </div>
          <div>NUTRITION</div>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </div>
        </div>
        <img src={nutrition2Icon} alt="" className="back-image"/>
      </div>
    </div>
  );
}
