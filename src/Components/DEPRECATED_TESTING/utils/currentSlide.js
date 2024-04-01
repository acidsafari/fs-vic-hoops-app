// DEPRECATED ATTEMP

import SlideShow from './Components/News/Caroussel';

/* CAROUSEL CONFIG */
var slidePosition = 1;
SlideShow(slidePosition);

//  images controls
export default function currentSlide(n) {
    SlideShow(slidePosition = n);
}