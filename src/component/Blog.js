import React, { useEffect } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Blog() {
  useEffect(() => {
    var btnContainer = document.getElementById("hovering");
    console.log(btnContainer);
    var btns = btnContainer.getElementsByClassName("btnz");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activate");
        current[0].className = current[0].className.replace(" activate");
        this.className += " activate";
      });
    }
    console.log(btns);
  }, []);

  //

  // console.log(btnContainer);
  return (
    <div className="blog">
      <div className="blog-box">
        <div className="blog1">
          <div className="blog11">OUR LATEST BLOG</div>
          <div className="blog12"></div>
          <div className="blog13">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </div>
        </div>
        <div className="blog2">
          <div id="hovering" className="blog2-box">
            <div className="btnz activate">
              <div className="blog21">The Weekend Break</div>
            </div>
            <div className="btnz">
              <div className="blog21">The Package Holiday</div>
            </div>
            <div className="btnz">
              <div className="blog21">The Group Package</div>
            </div>
            <div className="btnz">
              <div className="blog21">Annual Package</div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog3">
        {/* First Box */}
        <div className="blog3-box">
          <div className="blog3-img1">
            <div className="blog3-img1-date">
              <div className="blog3-date1">23 </div>
              <div className="blog3-date2">JAN </div>
            </div>
          </div>
          <div className="blog3-info">
            <div className="blog3-info1">
              <div className="blog-icon-flex">
                <div>
                  <PersonOutlineIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">ADMIN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <CalendarTodayIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">23 JAN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <MessageIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">COMMENT</div>
              </div>
            </div>
            <div className="blog3-info2">LOREM IPSUM DOLOR SIT</div>
            <div className="blog3-info3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
            <div className="blog3-info4">
              <div>READ MORE</div>
            </div>
          </div>
        </div>
        {/* Second Box */}
        <div className="blog3-box">
          <div className="blog3-img1">
            <div className="blog3-img1-date">
              <div className="blog3-date1">23 </div>
              <div className="blog3-date2">JAN </div>
            </div>
          </div>
          <div className="blog3-info">
            <div className="blog3-info1">
              <div className="blog-icon-flex">
                <div>
                  <PersonOutlineIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">ADMIN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <CalendarTodayIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">23 JAN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <MessageIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">COMMENT</div>
              </div>
            </div>
            <div className="blog3-info2">LOREM IPSUM DOLOR SIT</div>
            <div className="blog3-info3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
            <div className="blog3-info4">
              <div>READ MORE</div>
            </div>
          </div>
        </div>
        {/* Second Box */}
        <div className="blog3-box">
          <div className="blog3-img1">
            <div className="blog3-img1-date">
              <div className="blog3-date1">23 </div>
              <div className="blog3-date2">JAN </div>
            </div>
          </div>
          <div className="blog3-info">
            <div className="blog3-info1">
              <div className="blog-icon-flex">
                <div>
                  <PersonOutlineIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">ADMIN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <CalendarTodayIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">23 JAN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <MessageIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">COMMENT</div>
              </div>
            </div>
            <div className="blog3-info2">LOREM IPSUM DOLOR SIT</div>
            <div className="blog3-info3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
            <div className="blog3-info4">
              <div>READ MORE</div>
            </div>
          </div>
        </div>
        {/* Second Box */}
        <div className="blog3-box">
          <div className="blog3-img1">
            <div className="blog3-img1-date">
              <div className="blog3-date1">23 </div>
              <div className="blog3-date2">JAN </div>
            </div>
          </div>
          <div className="blog3-info">
            <div className="blog3-info1">
              <div className="blog-icon-flex">
                <div>
                  <PersonOutlineIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">ADMIN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <CalendarTodayIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">23 JAN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <MessageIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">COMMENT</div>
              </div>
            </div>
            <div className="blog3-info2">LOREM IPSUM DOLOR SIT</div>
            <div className="blog3-info3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
            <div className="blog3-info4">
              <div>READ MORE</div>
            </div>
          </div>
        </div>
        {/* Second Box */}
        <div className="blog3-box">
          <div className="blog3-img1">
            <div className="blog3-img1-date">
              <div className="blog3-date1">23 </div>
              <div className="blog3-date2">JAN </div>
            </div>
          </div>
          <div className="blog3-info">
            <div className="blog3-info1">
              <div className="blog-icon-flex">
                <div>
                  <PersonOutlineIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">ADMIN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <CalendarTodayIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">23 JAN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <MessageIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">COMMENT</div>
              </div>
            </div>
            <div className="blog3-info2">LOREM IPSUM DOLOR SIT</div>
            <div className="blog3-info3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
            <div className="blog3-info4">
              <div>READ MORE</div>
            </div>
          </div>
        </div>
        {/* Second Box */}
        <div className="blog3-box">
          <div className="blog3-img1">
            <div className="blog3-img1-date">
              <div className="blog3-date1">23 </div>
              <div className="blog3-date2">JAN </div>
            </div>
          </div>
          <div className="blog3-info">
            <div className="blog3-info1">
              <div className="blog-icon-flex">
                <div>
                  <PersonOutlineIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">ADMIN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <CalendarTodayIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">23 JAN</div>
              </div>
              <div className="blog-icon-flex">
                <div>
                  <MessageIcon className="blog-icon" />
                </div>
                <div className="blog-icon-text">COMMENT</div>
              </div>
            </div>
            <div className="blog3-info2">LOREM IPSUM DOLOR SIT</div>
            <div className="blog3-info3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </div>
            <div className="blog3-info4">
              <div>READ MORE</div>
            </div>
          </div>
        </div>
        {/* Second Box */}
      </div>
    </div>
  );
}
