import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";

import { deleteImg } from "../../store/actions/imgAction";

const Album = props => {
  const styles = {
    backgroundColor: "lavender",
    margin: "20px auto",
    minWidth: "100%"
  };
  console.log("props", props);
  const { albumData, auth } = props;

  return (
    <div style={styles}>
      {albumData ? (
        <div>
          <h2>Album Name: {albumData.albumName}</h2>
          <ul className="album__img-list">
            {albumData.photos.map((item, indx) => {
              return (
                <li className="album__img-placeholder" key={indx}>
                  {auth.uid && (
                    <span
                      className="delete-btn"
                      id={`${albumData.albumName}--${item.name}`}
                      onClick={e => {
                        //console.log("show me what is this?", e.target.id);
                        props.deleteImg(
                          item.name,
                          item.url,
                          albumData.albumName,
                          props.firebase
                        );
                      }}
                    >
                      &times;
                    </span>
                  )}
                  <img
                    className="album__img"
                    alt={albumData.albumName + "_img" + indx}
                    src={item.url}
                  />
                </li>
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
