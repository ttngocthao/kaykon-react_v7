import React from "react";
//url is a property of props object
const ImgSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    minWidth: "200px",
    minHeight: "200px"
  };
  return <div className="img-slide" style={styles} />;
};
export default ImgSlide;
