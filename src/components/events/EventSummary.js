import React from "react";
const EventSummary = ({ event }) => {
  const styles = {
    width: "300px",
    margin: "20px 0",
    backgroundColor: "lavender",
    padding: "10px 20px"
  };
  return (
    <div style={styles}>
      <h4>{event.name}</h4>
      <p>Date: {event.date}</p>
      <p>{event.text}</p>
    </div>
  );
};
export default EventSummary;
