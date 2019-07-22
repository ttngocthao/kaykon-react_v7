import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { getImgs } from "../../store/actions/imgAction";
import AlbumThumbnai from "./AlbumThumbnail";
//import Album from "./Album";

const Gallery = props => {
  // Object.keys()-->return an array of properties from the object
  props.gallery && console.log("object key", Object.keys(props.gallery));

  props.gallery &&
    Object.keys(props.gallery).map(album => console.log(props.gallery[album]));
  return (
    <div>
      <h1>Gallery</h1>
      {props.gallery ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {props.gallery &&
            Object.keys(props.gallery).map((alb, indx) => {
              const gallery = props.gallery;
              return (
                <Link key={indx} to={`/gallery/${gallery[alb].albumName}`}>
                  <AlbumThumbnai
                    albumName={gallery[alb].albumName}
                    imgUrls={gallery[alb].imgUrls}
                  />
                </Link>
              );
            })}
        </div>
      ) : (
        <div>No Album</div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getImgs: fb => dispatch(getImgs(fb))
  };
};
const mapStateToProps = state => {
  console.log("gallery", state);
  return {
    gallery: state.firestore.data.gallery
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "gallery" }])
)(Gallery);
