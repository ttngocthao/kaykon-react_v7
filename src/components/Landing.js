import React from "react";
import Carousel from "./SlideShow/Carousel";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import MoreInfo from "./MoreInfo";

const Landing = () => {
  return (
    <div>
      <h1>This is landing page</h1>
      <Carousel />
      <AboutUs />
      <WhyUs />
      <MoreInfo />
    </div>
  );
};

export default Landing;
