import React from "react";
import "./Header.css";
import HeaderVideo from './HeaderVideo';

function Header(youtubeId) {
  return (
    <div className="Header">
      <div className="HeaderTextCenterrow">
        <h1>Be Part of Something Bigger !</h1>
      </div>
      <HeaderVideo />
    </div>    
  )
}

export default Header;