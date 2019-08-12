import moment from "moment";
export const getMenu = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    let menuList = [];
    const firestore = getFirestore();
    firestore
      .collection("menu")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          //console.log(doc.id, " => ", doc.data());
          menuList.push({
            menuId: doc.id,
            from: doc.data().from.toDate(),
            to: moment(doc.data().to.toDate()).format("DD MMM YYYY"),
            mon: doc.data().Mon,
            tue: doc.data().Tue,
            wed: doc.data().Wed,
            thu: doc.data().Thu,
            fri: doc.data().Fri
          });
        });
      })
      .then(() => {
        dispatch({ type: "GET_MENU", menuList });
      });
  };
};
