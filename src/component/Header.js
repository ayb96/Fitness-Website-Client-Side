import React from "react";
import sideBarIcon from "../Images/Group 5.svg";
import logoIcon from "../Images/Group 204-header.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const runMe = () => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  };
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
          <nav className="navbar">
            <div className="navbar-links">
              <ul>
                <li>
                  <a href="#" className="home">HOME</a>
                </li>
                <li>
                  <a href="#">SHOP</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="search-title"
                style={{
                  display: "block",
                  padding: "1rem",
                  borderLeft: "1px #D1D1D1 solid",
                  borderBottom: "1px #D1D1D1 solid",
                }}
              >
                <SearchIcon />
              </div>
              <div
                className="toggle-button"
                style={{
                  display: "block",
                  padding: "1rem",
                  backgroundColor: "#E41C26",
                }}
                onClick={runMe}
              >
                <img src={sideBarIcon} alt="" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
