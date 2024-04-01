// DEPRECATED ATTEMP

import SlideShow from './Components/News/Caroussel';

/* CAROUSEL CONFIG */
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
export default function plusSlides(n) {
    SlideShow(slidePosition += n);
}