import React from "react";

const NotiTemp = props => {
  return (
    <div className="notifi-wrap">
      <div className="notifi-content">
        <h1>{props.notifiMsg}</h1>
      </div>
    </div>
  );
};

export default NotiTemp;
