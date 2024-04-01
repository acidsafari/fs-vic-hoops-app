import React from "react";
import "./Main";

export default function Partners() {
  

  return (
    <div className="SmallGallery">
      <h2>Programs</h2>
      <div className="CompImg">
        <div className="SmallPic">
          <img src="./assets/images/SSV-1.png"
            alt="Partner 1" 
            style={{ width: '4', height:'6' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Partner 1</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./assets/images/SSV-1.png"
            alt="Partner 2" 
            style={{ width: '4', height:'6' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Partner 2</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./assets/images/SSV-1.png"
            alt="Partner 3" 
            style={{ width: '4', height:'6' }} 
            href="https://www.basketballvictoria.com.au/about/annual-reports"
            /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Partner 3</figcaption>
        </div>
        <div className="SmallPic">
          <img src="./SSV-1.png"
            alt="Partner 4" 
            style={{ width: '4', height:'6' }} /> 
          <figcaption href="https://www.basketballvictoria.com.au/about/annual-reports"
            >Partner 4</figcaption>
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
