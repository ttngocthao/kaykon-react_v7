const initState = { currentImgIndex: 0 };
const slideShowReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CAROUSEL":
      console.log("get slideshow gallery successfully", action.data);
      return { ...state, data: action.data };
    case "PRE_SLIDE":
      console.log("Pre slide is successully loaded", action.index);
      return { ...state, currentImgIndex: action.index };
    case "NEXT_SLIDE":
      console.log("next slide is successully loaded", action.index);
      return { ...state, currentImgIndex: action.index };
    default:
      return state;
  }
};
export default slideShowReducer;
