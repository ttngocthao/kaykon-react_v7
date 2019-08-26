import React from "react";
import Carousel from "./SlideShow/Carousel";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import MoreInfo from "./MoreInfo";
import Footer from "./layout/Footer";
import Enrollment from "./Enrollment";

const Landing = () => {
  return (
    <div>
      <h1>This is landing page</h1>
      <Carousel />
      <AboutUs />
      <WhyUs />
      <Enrollment />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default Landing;
