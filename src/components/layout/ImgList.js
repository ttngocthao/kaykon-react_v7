import React from "react";

const ImgList = props => {
  return (
    <li className="album__img-placeholder">
      {props.auth && (
        <p>
          <span className="delete-btn__white-background" />
          <span className="delete-btn" onClick={props.deleteImgHandle}>
            &times;
          </span>
        </p>
      )}
      <img
        className="album__img"
        alt=""
        src={props.src}
        onClick={props.viewImgHandle}
      />
    </li>
  );
};

export default ImgList;
