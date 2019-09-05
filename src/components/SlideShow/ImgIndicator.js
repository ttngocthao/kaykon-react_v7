import React from "react";
const ImgIndicator = props => {
  const style = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
    display: "inline-block",
    margin: "0px 5px"
  };
  //console.log('imgindicator',props)
  const { index, currentImgIndex } = props;

  return (
    <span
      className="img-indicator"
      style={
        index === currentImgIndex
          ? { ...style, backgroundColor: "#BCD322" }
          : style
      }
    />
  );
};
export default ImgIndicator;
