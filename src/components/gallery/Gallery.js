import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { deleteAlbum, getAlbums } from "../../store/actions/imgAction";
import AlbumThumbnail from "./AlbumThumbnail";
//import Album from "./Album";

import DefaulBgkImg from "../../images/homePage/galleryImg.jpg";

class Gallery extends Component {
  state = {};
  // Object.keys()-->return an array of properties from the object
  //props.gallery && console.log("object key", Object.keys(props.gallery));
  componentDidMount() {
    this.props.getAlbums();
  }
  render() {
    const { gallery, auth } = this.props;
    return (
      <div className="page-content">
        <div className="section-wrap">
          <div className="large-screen__centered">
            <h1 className="section-heading">Thư viện hình</h1>
            {auth.uid && (
              <h3>
                <Link to="/create-album" className="page-link">
                  Add new album
                  <i className="fas fa-folder-plus upload-input__icon" />
                </Link>
              </h3>
            )}
          </div>
        </div>

        {gallery ? (
          <div className="album__img-list">
            {gallery &&
              Object.keys(gallery).map((alb, indx) => {
                const thumbnailBkgImg = gallery[alb].photos[0]
                  ? gallery[alb].photos[0].url
                  : DefaulBgkImg;
                return (
                  <div
                    key={indx}
                    className="album-thumbnail"
                    style={{ backgroundImage: `url(${thumbnailBkgImg})` }}
                  >
                    {auth.uid && (
                      <p
                        className="delete-btn__album"
                        onClick={() =>
                          this.props.deleteAlbum(
                            gallery[alb].albumName,
                            this.props.firebase
                          )
                        }
                      >
                        &times;
                      </p>
                    )}

                    <Link to={`/gallery/${gallery[alb].albumName}`}>
                      <AlbumThumbnail
                        albumName={gallery[alb].albumName}
                        imgUrls={gallery[alb].photos}
                        length={gallery[alb].photos.length}
                        auth={auth}
                        deleteHandle={() => {
                          this.props.deleteAlbum(
                            gallery[alb].albumName,
                            this.props.firebase
                          );
                        }}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAlbums: () => dispatch(getAlbums()),
    deleteAlbum: (albumName, firebase) =>
      dispatch(deleteAlbum(albumName, firebase))
  };
};
const mapStateToProps = state => {
  console.log("gallery", state);
  return {
    gallery: state.image.gallery,
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
