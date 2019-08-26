import React from "react";
import { Link } from "react-router-dom";
const HomeItem = props => {
  const { content, pageSec } = props;

  const style = {
    backgroundImage: `url(${content.bgImg})`,
    backgroundSize: "cover"
  };

  return (
    <div className={`${pageSec && pageSec} block-container`} style={style}>
      <div className="block-content">
        <h3 className="h3-title">{content.title}</h3>
        <div className="text">{content.text}</div>
        <Link to={content.link} className="visit-link">
          {content.linkText ? content.linkText : "Read more..."}
        </Link>
      </div>
    </div>
  );
};

export default HomeItem;
//img redict: Image by <a href="https://pixabay.com/users/Kunphotographer-13221290/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4390337">Thông Nguyễn</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4390337">Pixabay</a>
