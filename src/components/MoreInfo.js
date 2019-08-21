import React from "react";
import HomeItem from "./layout/HomeItem";
const MoreInfo = () => {
  const contentArr = [
    { title: "7days before start", text: "blahblah", link: "/contact" },
    { title: "Excursion", text: "LoremIpsum ", link: "/excursion" },
    { title: "Menu", text: "blah blah", link: "/menu" },
    { title: "Gallery", text: "blah blah", link: "/gallery", linkText: "View" }
  ];

  return (
    <section>
      <div>
        <h1>News - Events</h1>
      </div>

      {contentArr &&
        contentArr.map((item, indx) => {
          return <HomeItem key={indx} content={item} />;
        })}
    </section>
  );
};
export default MoreInfo;
