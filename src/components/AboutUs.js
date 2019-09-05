import React from "react";
//import { LoremIpsum } from "react-lorem-ipsum";
import ForWhom from "../images/homePage/forWhom2.jpg";
import WhatIsIt from "../images/homePage/whatIsIt.jpg";
import WelcomeImg from "../images/homePage/welcomeImg.jpg";
import HomeItem from "./layout/HomeItem";
const AboutUs = () => {
  const contentArr = [
    {
      title: "Welcome to Kaykon Kindergarten ",
      text: "Bạn là ai? Bạn cung cấp dịch vụ gì? Đối tượng dịch vụ?",
      link: "/contact",
      bgImg: WelcomeImg
    },
    {
      title: "Montessori là ai? Phương pháp giáo dục Montessori là gì? ",
      text:
        "Một đoạn ngắn giới thiệu về Montessori và phương pháp giáo dục của bà",
      link: "/contact",
      bgImg: WhatIsIt
    },
    {
      title: "Ai sẽ phù hợp với Montessori?",
      text:
        "Mỗi trẻ sẽ phù hợp với một cách thức và lộ trình giáo dục khác nhau, Không có một phương pháp nào chung cho mỗi trẻ vì các em là duy nhất và riêng biệt.",
      link: "/menu",
      bgImg: ForWhom
    }
  ];

  return (
    <section className="section-wrap">
      <h1 className="section-heading">Về chúng tôi</h1>

      {/* <div className="about-us main-block">
        <p>Bạn là ai?</p>
        <p>Bạn cung cấp dịch vụ gì?</p>
        <p>Đối tượng dịch vụ?</p>
      </div> */}
      <section className="about-us block-wrap">
        {contentArr &&
          contentArr.map((item, indx) => {
            return <HomeItem key={indx} content={item} pageSec="about-us" />;
          })}
        <div className="about-us block-container block-container__spare" />
      </section>
    </section>
  );
};
export default AboutUs;
