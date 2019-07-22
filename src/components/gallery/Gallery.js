import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { getImgs } from "../../store/actions/imgAction";
import AlbumThumbnai from "./AlbumThumbnail";
//import Album from "./Album";

const Gallery = props => {
  // console.log("props from gallery", props.gallery);
  props.gallery && console.log("object key", Object.keys(props.gallery));
  //console.log('length',Object.keys(props.gallery).length)
  props.gallery && console.log("object key", Object.keys(props.gallery)[0]);
  props.gallery &&
    Object.keys(props.gallery).map(album => console.log(props.gallery[album]));
  return (
    <div>
      <h1>Gallery</h1>

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
