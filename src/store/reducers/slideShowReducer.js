const initState = { currentImgIndex: 0, editingSlideShow: true };
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
    case "EDIT_SLIDESHOW":
      console.log("edit slideshow mode", action.editingSlideShow);
      return { ...state, editingSlideShow: action.editingSlideShow };
    case "EXIT_EDITMODE":
      console.log("exit edit slideshow mode", action.editingSlideShow);
      return { ...state, editingSlideShow: action.editingSlideShow };
    default:
      return state;
  }
};
export default slideShowReducer;
