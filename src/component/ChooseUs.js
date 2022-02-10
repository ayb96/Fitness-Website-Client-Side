import React from "react";
import ChooseUseSwiper from "./ChooseUsSwiper";
export default function ChooseUs() {
  return (
    <div className="chooseus">
      <div className="main-content">
        <div className="box1">
          <div>WHY CHOOSE US</div>
        </div>
        {/* <div className="box2">FEATURES</div> */}
        <div className="line1"></div>

        <div className="box3">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
        </div>
        <div className="box4">
          <ChooseUseSwiper />
        </div>
      </div>
    </div>
  );
}
