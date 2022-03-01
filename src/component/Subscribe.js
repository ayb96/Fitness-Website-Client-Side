import React from "react";

import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Subscribe() {
  AOS.init();
  const handleSubscribe = (e) => {
    e.preventDefault();

    swal({
      title: "Good job!",
      text: "you have subscribed successfully",
      icon: "success",
    });
  };
  return (
    <div className="subscribe">
      <div className="subscribe-box" data-aos="zoom-in">
        <div className="subscribe-subbox">
          <div className="subscribe-subbox1">
            <div className="subscribe-subbox11">LETS START!</div>
            <div className="subscribe-subbox12">
              SUBSCRIBE TO OUR NEWSLETTER
            </div>
            <div className="subscribe-subbox13">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className="subscribe-subbox2">
            <form className="" onSubmit={handleSubscribe}>
              <div className="">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  ></input>
                </div>

                <div>
                  <label />
                  <button className="primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
