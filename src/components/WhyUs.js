import React from "react";
import HomeItem from "./layout/HomeItem";
const WhyUs = () => {
  const contentArr = [
    { title: "Curriculum", text: "blahblah", link: "/curriculum" },
    { title: "Facility", text: "LoremIpsum ", link: "/menu" },
    { title: "Staff", text: "blah blah blah", link: "/gallery" },
    { title: "Quality", text: "blah blah blah", link: "/gallery" }
  ];

  return (
    <section>
      <div>
        <h1>Why us</h1>
      </div>
      {contentArr &&
        contentArr.map((item, indx) => {
          return <HomeItem key={indx} content={item} />;
        })}
    </section>
  );
};
export default WhyUs;
