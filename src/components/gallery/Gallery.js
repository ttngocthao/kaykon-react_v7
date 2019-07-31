import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { deleteAlbum } from "../../store/actions/imgAction";
import AlbumThumbnail from "./AlbumThumbnail";
//import Album from "./Album";

const Gallery = props => {
  // Object.keys()-->return an array of properties from the object
  //props.gallery && console.log("object key", Object.keys(props.gallery));

  return (
    <div>
      <h1>Gallery</h1>
      {props.gallery ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap"
          }}
        >
          {props.gallery &&
            Object.keys(props.gallery).map((alb, indx) => {
              const gallery = props.gallery;
              return (
                <div key={indx} className="album-thumbnail">
                  <AlbumThumbnail
                    albumName={gallery[alb].albumName}
                    imgUrls={gallery[alb].imgUrls}
                    length={gallery[alb].photos.length}
                    auth={props.auth}
                    deleteHandle={() => {
                      props.deleteAlbum(gallery[alb].albumName, props.firebase);
                    }}
                  />
                  <Link to={`/gallery/${gallery[alb].albumName}`}>View</Link>
                </div>
              );
            })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAlbum: (albumName, firebase) =>
      dispatch(deleteAlbum(albumName, firebase))
  };
};
const mapStateToProps = state => {
  //console.log("gallery", state);
  return {
    gallery: state.firestore.data.gallery,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "gallery" }])
)(Gallery);
