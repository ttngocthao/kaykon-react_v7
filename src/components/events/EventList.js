import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import EventSummary from "./EventSummary";

const EventList = props => {
  const { events } = props;
  return (
    <div>
      {events &&
        events.map((event, indx) => {
          return (
            <Link key={indx} to={`events/${event.id}`}>
              <EventSummary event={event} />
            </Link>
          );
        })}
    </div>
  );
};
const mapStateToProps = state => {
  console.log("eventlist", state);
  return {
    events: state.firestore.ordered.events
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "events" }, { collection: "gallery" }])
)(EventList);
