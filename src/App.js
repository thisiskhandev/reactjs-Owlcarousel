import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
const App = () => {
  return (
    <>
      <div id="main">
        <h1>Owl Carousel</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v4JPhz2y7ms"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>
          Carousel starts from here for more details please read README.md and
          visit this{" "}
          <a
            href="https://www.npmjs.com/package/react-owl-carousel"
            target="_blank"
          >
            react-owl-carousel
          </a>
        </p>
      </div>
      <OwlCarousel
        className="owl-theme"
        autoplay
        nav
        dots
        loop
        margin={10}
        lazyLoad
      >
        <div className="item">
          <img src={img1} alt={img1} />
        </div>
        <div className="item">
          <img src={img2} alt={img2} />
        </div>
        <div className="item">
          <img src={img3} alt={img3} />
        </div>
        <div className="item">
          <img src={img4} alt={img4} />
        </div>
        <div className="item">
          <img src={img5} alt={img5} />
        </div>
      </OwlCarousel>
    </>
  );
};
export default App;
