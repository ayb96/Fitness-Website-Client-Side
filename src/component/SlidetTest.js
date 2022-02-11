import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCjgcdnAObe88-SHVJEvPdfefJWoASz4w7A&usqp=CAU",
    caption: "First Slide",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qZpo_dgHj3uBJ7t4JKGNoT214DHdT1hKzg&usqp=CAU",
    caption: "Second Slide",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qZpo_dgHj3uBJ7t4JKGNoT214DHdT1hKzg&usqp=CAU",
    caption: "Third Slide",
  },
];

export default function Blog() {
    
  return (
    <div className="slide-container slide-show">
      <Fade style={{ maxHeight: "530px" }}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} style={{ height: "530px", width:"100%", backgroundSize: "cover" }}/>
            </div>
            {/* <h2>{fadeImage.caption}</h2> */}
            <div className="slider-content ">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div>{fadeImage.caption}</div>
                <div>Title Here3</div>
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
};
