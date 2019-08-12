import React from "react";
import moment from "moment";

const MenuDisplay = props => {
  const { item } = props;

  return (
    <div>
      <h4>
        From {moment(item.from).format("DD MMM YYYY")} to{" "}
        {moment(item.to).format("DD MMM YYYY")}
      </h4>

      <h3>Monday:</h3>
      <ul>
        {item.mon &&
          item.mon.map((dish, index) => {
            return <li key={index}>{dish}</li>;
          })}
      </ul>

      <h3>Tuesday:</h3>
      <ul>
        {item.tue &&
          item.tue.map((dish, index) => {
            return <li key={index}>{dish}</li>;
          })}
      </ul>
    </div>
  );
};

export default MenuDisplay;
