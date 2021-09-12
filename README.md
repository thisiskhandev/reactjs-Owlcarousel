1- Forget Step 1 in below for inject jquery or webpack whatever.
Owl Carousel from https://www.npmjs.com/package/react-owl-carousel

2- Get jquery slim cdn from here for step 1 from npmjs and paste in your head in html.
https://cdnjs.com/libraries/jquery

3- Import relative OwlCarousel from your node-modules which are below.

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

4- Put images or whatever for carousel use Owlcarousel props for things using navs and dots loops (for more info please see App.js).