import React from "react";
import HomeItem from "./layout/HomeItem";
import LearnImg from "../images/homePage/learnImg.jpg";
import FacilityImg from "../images/homePage/facilityImg.jpg";
import StaffImg from "../images/homePage/staffImg.jpg";
import PriceImg from "../images/homePage/priceImg.jpg";
const WhyUs = () => {
  const contentArr = [
    {
      title: "Chương trình học",
      text:
        "đa dạng, gần gũi thiên nhiên, thực hành kĩ năng cần thiết trong cuộc sống",
      link: "/curriculum",
      bgImg: LearnImg
    },
    {
      title: "Cơ sở vật chất",
      text: "giới thiệu ngắn gọn về cơ sở vật chất của trường ",
      link: "/menu",
      bgImg: FacilityImg
    },
    {
      title: "Giáo viên",
      text: "giới thiệu ngắn gọn về nhân sự của trường",
      link: "/gallery",
      bgImg: StaffImg
    },
    {
      title: "Học phí",
      text: "Học phí hợp lí ...etc",
      link: "/gallery",
      bgImg: PriceImg
    }
  ];

  return (
    <section className="section-wrap">
      <h1 className="section-heading">Tại sao chọn Montessori</h1>

      <div className="block-wrap">
        {contentArr &&
          contentArr.map((item, indx) => {
            return <HomeItem key={indx} content={item} pageSec="why-us" />;
          })}
      </div>
    </section>
  );
};
export default WhyUs;
