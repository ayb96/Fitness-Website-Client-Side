import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://images.pexels.com/photos/6739958/pexels-photo-6739958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "First Slide",
    title: "Title 1",
  },
  {
    url: "https://images.pexels.com/photos/4164658/pexels-photo-4164658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Second Slide",
    title: "Title 2",
  },
  {
    url: "https://images.pexels.com/photos/949130/pexels-photo-949130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Third Slide",
    title: "Title 3",
  },
];

export default function Blog() {
  
  return (
    <div className="slide-container slide-show">
      <Fade style={{ maxHeight: "33.125rem" }} >
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img
                src={fadeImage.url}
                style={{ height: "33.125rem", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
            {/* <h2>{fadeImage.caption}</h2> */}
            <div className="slider-content ">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div>{fadeImage.caption}</div>
                <div>{fadeImage.title}</div>
                <div>Description Here</div>
                <div>
                  <div id="join-text">JOIN US NOW</div>
                </div>
                <div id="join-box"></div>
              </div>
              <div className="slider-content-sub2"></div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
