import React from 'react';
import "./News.css";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import 'bootstrap/dist/css/bootstrap.min.css';
import HighPerformanceCamp from './HighPerformanceCamp.jpg';
import fig1NationalsVicResults from './fig1NationalsVicResults.jpg';
import fig2WomenSelected from './fig2WomenSelected.jpg';
import fig4RollersEuroTour from './fig4RollersEuroTour.webp';

// WOULD BE NICE TO MAKE THIS A FUNCTION THAT TAKES A LIST OF INPUTS

function News() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="News">
      <h1>NEWS</h1>
      <div className="CarouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={fig1NationalsVicResults} 
            alt='Nationals Vic Results'
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>Clean Sweep At Nationals!</h3>
            <a href='https://www.basketballvictoria.com.au/news/victorias-clean-sweep-at-nationals'>
              Results</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={fig2WomenSelected} 
            alt='Women Selected'
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>Victorians selected</h3>
            <a href="https://www.basketballvictoria.com.au/news/victorians-selected" >
              SHE HOOPS News</a>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={HighPerformanceCamp} 
            alt="National Performance Camp 2024"
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>National Performance Camp 2024</h3>
            <a href="https://www.basketballvictoria.com.au/news/national-performance-camp-2024" 
              >Check what went down</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={fig4RollersEuroTour} 
            alt="Rollers Ready For European Tour"
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>Rollers Ready For European Tour</h3>
            <a href="https://www.australia.basketball/news/3339914/rollers-ready-for-european-tour" 
              >Roll with them here</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default News;