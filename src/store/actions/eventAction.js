export const createEvent = event => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("events")
      .add({ ...event, createdAt: new Date() })
      .then(() => {
        dispatch({ type: "CREATE_EVENT", event: event });
      })
      .catch(err => {
        dispatch({ type: "CREATE_EVENT_ERROR", err });
      });
  };
};
