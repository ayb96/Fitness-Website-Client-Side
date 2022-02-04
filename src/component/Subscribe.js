import React from "react";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-box">
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
            <form className="">
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
