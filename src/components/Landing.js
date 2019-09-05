import React from "react";
import Carousel from "./SlideShow/Carousel";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import MoreInfo from "./MoreInfo";
import Enrollment from "./Enrollment";

const Landing = () => {
  return (
    <div className="home-page page-content">
      <Carousel />
      <AboutUs />
      <WhyUs />
      <Enrollment />
      <MoreInfo />
    </div>
  );
};

export default Landing;
