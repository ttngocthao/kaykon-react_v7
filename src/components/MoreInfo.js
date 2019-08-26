import React from "react";
import HomeItem from "./layout/HomeItem";
import ExcurImg from "../images/homePage/excurImg2.jpg";
import MenuImg from "../images/homePage/menuImg2.jpg";
import BeforeStartImg from "../images/homePage/firstDay.jpg";
import GalleryImg from "../images/homePage/galleryImg.jpg";

const MoreInfo = () => {
  const contentArr = [
    {
      title: "Hai tuần trước khi nhập học",
      text: "Ngày học đầu tiến đóng vai trò rất quan trọng ...",
      link: "/contact",
      bgImg: BeforeStartImg
    },
    {
      title: "Tham quan - Dã ngoại",
      text: "Gần gũi với thiên nhiên, .... ",
      link: "/excursion",
      bgImg: ExcurImg
    },
    {
      title: "Thực đơn của trường",
      text: "blah blah",
      link: "/menu",
      bgImg: MenuImg
    },
    {
      title: "Thư viện ảnh",
      text: "blah blah",
      link: "/gallery",
      linkText: "View",
      bgImg: GalleryImg
    }
  ];

  return (
    <section className="section-wrap">
      <div>
        <h1>Thông tin - Sự kiện</h1>
      </div>

      {contentArr &&
        contentArr.map((item, indx) => {
          return <HomeItem key={indx} content={item} pageSec="more-info" />;
        })}
    </section>
  );
};
export default MoreInfo;
