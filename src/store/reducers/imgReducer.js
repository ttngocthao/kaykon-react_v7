const initiState = {
  gallery: [],
  uploadMsg: null,
  uploadProgress: null
};
const eventReducer = (state = initiState, action) => {
  switch (action.type) {
    case "GET_ALBUMS":
      console.log("get all albums successfully");
      return { ...state, gallery: action.gallery };
    case "IMG_UPLOAD":
      console.log("img upload successfully", state, action);
      return {
        ...state,
        uploadMsg: "Upload successful",
        albumRef: action.albumRef
      };
    case "IMG_UPLOAD_ERROR":
      console.log("fail to upload the image", action.err);
      return state;
    case "IMG_DELETED":
      console.log("image was deleted successfully");
      return { ...state };
    case "IMG_DELETED_ERROR":
      console.log("image was not deleted");
      return { ...state, errorMsg: action.err };
    case "DELETE_ALBUM":
      console.log("album is deleted successfully ", action.gallery);
      return { ...state, gallery: action.gallery };
    case "ERROR_DELETE_ALBUM":
      console.log("fail to delete album ", action.err);
      return { ...state, errorMsg: action.err };
    case "CANNOT_DELETE_ALBUM":
      console.log("cant delete album because", action.err);
      return { ...state, errorMsg: action.err };
    default:
      return state;
  }
};
export default eventReducer;
