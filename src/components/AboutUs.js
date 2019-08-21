import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import HomeItem from "./layout/HomeItem";
const AboutUs = () => {
  const contentArr = [
    {
      title: "what is this and this method?",
      text: "blahblah",
      link: "/contact"
    },
    {
      title: "Who is it for?",
      text: "LoremIpsum ",
      link: "/menu"
    }
  ];

  return (
    <section>
      <div>
        <h1>About us</h1>
        <div className="about-us block-wrap">
          <div className="about-us block-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          {contentArr &&
            contentArr.map((item, indx) => {
              return <HomeItem key={indx} content={item} pageName="about-us" />;
            })}
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
