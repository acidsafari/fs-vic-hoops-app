import React from "react";
import "./Main";
import SSV1 from "./SSV1.png";

export default function Programs() {
  

  return (
    <div className="SmallGallery">
      <h2>Programs</h2>
      <div className="CompImg">
        <div className="SmallPic">
          <img src={SSV1}
            alt="Program 1" 
            style={{ width: '40px', height:'40px' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Prog Image 1</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./assets/images/SSV-1.png"
            alt="Program 2" 
            style={{ width: '4', height:'6' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Prog Image 2</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./assets/images/SSV-1.png"
            alt="Program 3" 
            style={{ width: '4', height:'6' }} 
            href="https://www.basketballvictoria.com.au/about/annual-reports"
            /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Prog Image 3</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./SSV-1.png"
            alt="Program 4" 
            style={{ width: '4', height:'6' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Prog Image 4</figcaption>
        </div>
      </div>
    </div>
  );
}

const photos = [
  {
    src: "/assets/images/SSV-1.png",
    width: 4,
    height: 3
  },
  {
    src: "/assets/images/SSV-1.png",
    width: 1,
    height: 1
  },
  {
    src: "/assets/images/SSV-1.png",
    width: 4,
    height: 3
  },
  {
    src: "/assets/images/SSV-1.png",
    width: 4,
    height: 3
  }
];
