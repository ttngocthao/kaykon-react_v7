import React from "react";
//import { LoremIpsum } from "react-lorem-ipsum";
import ForWhom from "../images/homePage/forWhom.png";
import HomeItem from "./layout/HomeItem";
const AboutUs = () => {
  const contentArr = [
    {
      title: "Montessori là ai? Phương pháp giáo dục Montessori là gì?ssori ",
      text:
        "Một đoạn ngắn giới thiệu về Montessori và phương pháp giáo dục của bà",
      link: "/contact"
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
      <h1>Về chúng tôi</h1>
      <section className="block-wrap">
        <div className="about-us main-block">
          <p>Bạn là ai?</p>
          <p>Bạn cung cấp dịch vụ gì?</p>
          <p>Đối tượng dịch vụ?</p>
        </div>
        {contentArr &&
          contentArr.map((item, indx) => {
            return <HomeItem key={indx} content={item} pageSec="about-us" />;
          })}
      </section>
    </section>
  );
};
export default AboutUs;
