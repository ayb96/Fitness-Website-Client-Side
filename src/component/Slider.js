import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import sliderImage from "../Images/Group 13.png";

export default function Slider() {
  const slideImages = [
    {
      image: sliderImage,
    },
  ];
  // const properties = {
  //   duration: 5000,
  //   transitionDuration: 1000,
  //   infinite: true,
  //   prevArrow: (
  //     <div className="leftarrown-container">
  //       <svg
  //         className="leftarrown"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="13"
  //         height="21"
  //         viewBox="0 0 7.549 12.225"
  //       >
  //         <path
  //           id="Icon_material-keyboard-arrow-right"
  //           data-name="Icon material-keyboard-arrow-right"
  //           d="M12.885,19.413l4.666-4.676-4.666-4.676,1.436-1.436,6.112,6.112L14.321,20.85Z"
  //           transform="translate(20.434 20.85) rotate(-180)"
  //           fill="#fff"
  //         />
  //       </svg>
  //     </div>
  //   ),
  //   nextArrow: (
  //     <div
  //       style={{
  //         width: "70px",

  //         position: "absolute",
  //         right: "0",
  //       }}
  //     >
  //       <svg
  //         style={{ marginRight: "20px", cursor: "pointer" }}
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="13"
  //         height="21"
  //         viewBox="0 0 7.549 12.225"
  //       >
  //         <path
  //           id="Icon_material-keyboard-arrow-right"
  //           data-name="Icon material-keyboard-arrow-right"
  //           d="M12.885,19.413l4.666-4.676-4.666-4.676,1.436-1.436,6.112,6.112L14.321,20.85Z"
  //           transform="translate(-12.885 -8.625)"
  //           fill="#fff"
  //         />
  //       </svg>
  //     </div>
  //   ),
  // };

  return (
    <div className="slide-show">
      {/* <Slide style={{ height: "630px" }} {...properties}>
        {slideImages.map((obj, index) => {
          return (
            <div
              key={obj.index}
              className="each-slide slider"
              style={{ height: "630px" }}
            ></div>
          );
        })}
      </Slide> */}
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={sliderImage} class="d-block w-100" alt="..." />
            <div className="slider-content">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div>Tageline here</div>
                <div>Title Here1</div>
                <div>Description Here</div>
                <div>
                  <div id="join-text">JOIN US NOW</div>
                </div>
                <div id="join-box"></div>
              </div>
              <div className="slider-content-sub2"></div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={sliderImage} class="d-block w-100" alt="..." />
            {/* <div className="slider-content">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div>Tageline here</div>
                <div>Title Here</div>
                <div>Description Here</div>
                <div>
                  <div id="join-text">JOIN US NOW</div>
                </div>
                <div id="join-box"></div>
              </div>
              <div className="slider-content-sub2"></div>
            </div> */}
          </div>
          <div class="carousel-item" style={{}}>
            <img src={sliderImage} class="d-block w-100" alt="..." />
            <div className="slider-content">
              <div className="slider-content-sub1"></div>
              <div className="slider-content-sub">
                <div>Tageline here</div>
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
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          // style={{
          //   border: "red 1px solid",
          //   display: "block",
          //   width: "70px",
          //   height: "70px",
          //   position:"relative",
          //   left:"0px",
          //   backgroundColor:"red"
          // }}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          // style={{
          //   border: "red 1px solid",
          //   display: "block",
          //   width: "70px",
          //   height: "70px",
          //   position:"relative",
          //   left:"200px",
          //   top:"-70px",
          //   backgroundColor:"red"
          // }}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
