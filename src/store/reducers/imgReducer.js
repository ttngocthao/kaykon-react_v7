const initiState = {
  gallery: [
    "https://www.trzcacak.rs/myfile/detail/117-1178962_vector-royalty-free-download-cats-vector-black-cat.png",
    "https://downloadpng.com/wp-content/uploads/2018/08/cat.png",
    "https://static2.bigstockphoto.com/7/5/2/large2/257329807.jpg"
  ],
  uploadMsg: null,
  uploadProgress: null
};
const eventReducer = (state = initiState, action) => {
  switch (action.type) {
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
    case 'IMG_DELETED_ERROR':
      console.log('image was not deleted');
      return {...state,errorMsg: action.err}
    default:
      return state;
  }
};
export default eventReducer;
