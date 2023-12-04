import React from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const Carousel = ({ children, settings }) => {
  const carouselSettings = {
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    ...settings,
  };

  return (
    <div className="custom-carousel">
      <TinySlider settings={carouselSettings}>{children}</TinySlider>
    </div>
  );
};

export { Carousel };
