const initialState = {
  excursionList: [],
  openForm: false,
  errMsg: "",
  notifiMsg: null
};
const excursionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXCUR":
      console.log("get excursions successfully");
      return { ...state, excursionList: action.excursionList };
    case "OPEN_FORM":
      console.log("add new excursion form opened");
      return { ...state, openForm: action.openForm };
    case "CLOSE_FORM":
      console.log("add new excursion form closed");
      return { ...state, openForm: action.openForm };
    case "CREATE_EXCUR":
      console.log("new excursion is successfully created");
      return {
        ...state,
        excursionList: action.excursionList
      };
    case "ARTICLE_DELETED":
      console.log("article is successfuly deleted");
      return {
        ...state,
        excursionList: action.excursionList
      };
    case "ARTICLE_DELETED_ERROR":
      console.log("error in deleting the article", action.err);
      return { ...state, errMsg: action.err };
    default:
      return state;
  }
};
export default excursionReducer;
