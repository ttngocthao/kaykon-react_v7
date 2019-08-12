const initialState = {
  menuList: ["a", "b", "c"]
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MENU":
      console.log("get menu successfully");
      return { ...state, menuList: action.menuList };
    default:
      return state;
  }
};

export default menuReducer;
