import React from "react";
import { Link } from "react-router-dom";
const HomeItem = props => {
  const { content } = props;
  return (
    <div
      className={`${props.pageName &&
        props.pageName} home-item block-container`}
    >
      <div className="home-item__content-wrap">
        <h3>{content.title}</h3>
        <div>{content.text}</div>
        <Link to={content.link}>
          {content.linkText ? content.linkText : "Read more..."}
        </Link>
      </div>
    </div>
  );
};

export default HomeItem;
