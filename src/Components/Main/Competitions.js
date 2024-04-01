import React, { useState, useCallback } from "react";
import "./Main";
import NBL from "./NBL.png";

export default function Competitions() {
  

  return (
    <div className="SmallGallery">
      <h2>Competitions</h2>
      <div className="CompImg">
        <div className="SmallPic">
          <img src={NBL}
            alt="League 1" 
            style={{ width: '60px', height:'40px' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Comp Image 1</figcaption>
        </div>
        <div className="SmallPic">
          <img src="../assets/images/NBL.png"
            alt="League 2" 
            style={{ width: '60px', height:'40px' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Comp Image 2</figcaption>
        </div>
        <div className="SmallPic">
          <img src="../assets/images/NBL.png"
            alt="League 3" 
            style={{ width: '60px', height:'40px' }} 
            href="https://www.basketballvictoria.com.au/about/annual-reports"
            /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Comp Image 3</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./NBL.png"
            alt="League 4" 
            style={{ width: '60px', height:'40px' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Comp Image 4</figcaption>
        </div>
      </div>
    </div>
  );
}

const photos = [
  {
    src: "/assets/images/NBL.png",
    width: 4,
    height: 3
  },
  {
    src: "/assets/images/NBL.png",
    width: 1,
    height: 1
  },
  {
    src: "/assets/images/NBL.png",
    width: 4,
    height: 3
  },
  {
    src: "/assets/images/NBL.png",
    width: 4,
    height: 3
  }
];
