import React, { useEffect, useState } from "react";
import reviewpic from "../Images/Group 91.png";
import group36 from "../Images/Group 36.svg";

import ReviewSwiper from "./ReviewSwiper";

export default function Reviews() {
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
    <div className="reviews">
      <div className="reviews-box">
        <ReviewSwiper />
        {/* <div className="review-img1-box"> <img className="" src={group36} alt="" /></div> */}

        <div
          className="review-img-box"
          // style={{ transform: `translateY(${offsetY * 0.2}px)` }}
        >
          <img className="review-img" src={reviewpic} alt="" />
        </div>
      </div>
    </div>
  );
}
