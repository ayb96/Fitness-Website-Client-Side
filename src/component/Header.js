import React from "react";
import sideBarIcon from "../Images/Group 5.png";
import logoIcon from "../Images/Group 204.png";

export default function Header() {
  return (
    <div className="header" >
      <div className="header-logo" >
        <img src={logoIcon} alt="LOGO" />
      </div>
      <div className="top-nav-header">
        <div className="top-header" >
          <div className="info-header">
            <div>
              <div>icon</div>
              <div>740.993.7266</div>
            </div>
            <div>
              <div>icon</div>
              <div>Shanny90@gmail.com</div>
            </div>
          </div>
          <div className="social-icon">
            <div className="facbook-icon">icon</div>
            <div className="youtube-icon">icon</div>
            <div className="gmail-icon">icon</div>
            <div className="instagram-icon">icon</div>
          </div>
        </div>
        <div className="nav-header" >
          <div className="sub-nav-header">
            <div className="navbar">
              <div>Home</div>
              <div>Shop</div>
              <div>About</div>
              <div>Contact</div>
              <div>FAQ</div>
            </div>
            <div className="search-icon">Icon</div>
            <div className="sidebar-icon">
              <img src={sideBarIcon} alt="SideBar Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
