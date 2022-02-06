import React from "react";
import sideBarIcon from "../Images/Group 5.svg";
import logoIcon from "../Images/Group 204.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logoIcon} alt="LOGO" />
      </div>
      <div className="top-nav-header">
        <div className="top-header">
          <div className="info-header">
            <div className="info-header1">
              <div>
                <PhoneEnabledIcon />
              </div>
              <div>740.993.7266</div>
            </div>
            <div className="info-header2">
              <div>
                <MailOutlineOutlinedIcon />
              </div>
              <div>Shanny90@gmail.com</div>
            </div>
          </div>
          <div className="social-icon">
            <div className="facbook-icon">
              <FacebookIcon />
            </div>
            <div className="youtube-icon">
              <YouTubeIcon />
            </div>
            <div className="gmail-icon">
              <GoogleIcon />
            </div>
            <div className="instagram-icon">
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="nav-header">
          <div className="sub-nav-header">
            <div class="topnav" id="myTopnav">
              <a href="#home">HOME</a>
              <a href="#shop">SHOP</a>
              <a href="#about">ABOUT</a>
              <a href="#contact">CONTACT</a>
              <a href="#faq">FAQ</a>

              {/* <a class="icon" onClick={myFunction}>
                eewewvwevwv
              </a> */}
            </div>
            <div style={{ display: "flex"}}>
              <div className="search-icon">
                <SearchIcon />
              </div>
              <div className="sidebar-icon" onClick={myFunction}>
                <img src={sideBarIcon} alt="SideBar Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
