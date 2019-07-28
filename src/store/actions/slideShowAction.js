export const getSlideShow = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const data = [];
    firestore
      .collection("Carousel")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //console.log(doc.id, " => ", doc.data());
          data.push({ id: doc.id, name: doc.data().name, url: doc.data().url });
          //console.log('data variable',data)
          return data;
        });
      })
      .then(() => {
        dispatch({ type: "GET_CAROUSEL", data });
      });
  };
};

export const previousSlide = data => {
  return (dispatch, getState) => {
    const currentImgIndex = getState().slideShow.currentImgIndex;
    const lastIndex = data.length - 1;
    const resetIndex = currentImgIndex === 0;
    const index = resetIndex ? lastIndex : currentImgIndex - 1;
    // return index.then(() => {
    //   dispatch({ type: "PRE_SLIDE", index });
    // });
    dispatch({ type: "PRE_SLIDE", index });
  };
};

export const nextSlide = data => {
  return (dispatch, getState) => {
    const currentImgIndex = getState().slideShow.currentImgIndex;
    const lastIndex = data.length - 1;
    const resetIndex = currentImgIndex === lastIndex;
    const index = resetIndex ? 0 : currentImgIndex + 1;
    dispatch({ type: "NEXT_SLIDE", index });
  };
};
