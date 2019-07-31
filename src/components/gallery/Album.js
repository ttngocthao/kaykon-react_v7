import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";

import { deleteImg } from "../../store/actions/imgAction";
import ImgList from "../layout/ImgList";

const Album = props => {
  const styles = {
    backgroundColor: "lavender",
    margin: "20px auto",
    minWidth: "100%"
  };
  //console.log("props", props);
  const { albumData, auth } = props;
  // const deleteImgHandle =()=>{
  //   props.deleteImg(
  //     item.name,
  //     item.url,
  //     albumData.albumName,
  //     props.firebase
  //   );
  // }
  return (
    <div style={styles}>
      {albumData ? (
        <div>
          <h2>Album Name: {albumData.albumName}</h2>
          <h4>There are {albumData.photos.length} images in this album</h4>
          <ul className="album__img-list">
            {albumData.photos.map((item, indx) => {
              return (
                <ImgList
                  key={indx}
                  auth={auth.uid}
                  src={item.url}
                  deleteImgHandle={() =>
                    props.deleteImg(
                      item.name,
                      item.url,
                      albumData.albumName,
                      props.firebase
                    )
                  }
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps, "ownProps");
  // console.log('album',state)
  const albumName = ownProps.match.params.albumName;
  const gallery = state.firestore.data.gallery;
  const albumData = gallery ? gallery[albumName] : null;
  return { albumData: albumData, auth: state.firebase.auth, state };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteImg: (imageName, imageUrl, albumName, firebase) =>
      dispatch(deleteImg(imageName, imageUrl, albumName, firebase))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firebaseConnect(),
  firestoreConnect([{ collection: "gallery" }])
)(Album);
//export default (Album)
