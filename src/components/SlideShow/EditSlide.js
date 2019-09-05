import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import Resizer from "react-image-file-resizer";
import {
  exitEditMode,
  editSlideShow
} from "../../store/actions/slideShowAction";
import { uploadImg, deleteImg } from "../../store/actions/slideShowAction";
import ImgList from "../layout/ImgList";

class EditSlide extends Component {
  state = {
    images: null,
    uploadState: false,
    fileArr: []
  };
  handleChange = e => {
    const images = Array.from(e.target.files); //create an array of files from files input;
    this.setState({
      fileArr: []
    });
    if (images.length !== 0) {
      images.map(image => {
        return Resizer.imageFileResizer(
          image,
          700,
          700,
          "JPEG",
          200,
          0,
          uri => {
            this.setState({
              fileArr: [...this.state.fileArr, { name: image.name, uri }]
            });
            console.log(this.state);
          },
          "base64"
        );
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const { fileArr } = this.state;
    console.log("image+albumName", fileArr);
    fileArr.forEach(file => {
      this.props.uploadImg(file, this.props.firebase);
    });
    this.setState({
      fileArr: []
    });
    // console.log('state',this.state)
  };
  // exitEditModeHandle = () => {
  //   this.setState({
  //     fileArr: [],
  //     images: null
  //   });
  //   this.props.exitEditMode();
  // };
  // handleOutsideClick = e => {
  //   // ignore clicks on the component itself
  //   if (this.node.contains(e.target)) {
  //     return;
  //   }
  //   this.setState({
  //     fileArr: []
  //   });
  //   this.props.exitEditMode();
  // };
  render() {
    const { auth, data, editingSlideShow, editSlideShow } = this.props;
    const { fileArr } = this.state;
    if (!auth.uid) {
      return <Redirect to="/admin" />;
    }
    return (
      <Fragment>
        <div className="slide-edit-page page-content">
          <div className="section-wrap">
            <div className="large-screen__centered">
              <h1>Edit Slideshow </h1>
              <h2>Total: {data && data.length} image(s) </h2>
              <form onSubmit={this.handleSubmit} className=" ">
                <h3 className="form-heading">Upload image</h3>
                <input
                  className=""
                  id="upload-input"
                  name="images"
                  multiple
                  type="file"
                  onChange={this.handleChange}
                />
                <label for="upload-input">
                  <i className="fas fa-cloud-upload-alt upload-input__icon" />
                </label>
              </form>
            </div>

            {fileArr.length !== 0 ? (
              <Fragment>
                <div className="preView-imgUpload-list">
                  {fileArr.map((item, indx) => {
                    return (
                      <figure
                        key={indx}
                        style={{ maxWidth: "150px", overflow: "hidden" }}
                      >
                        <img src={item.uri} alt="" width="100%" />
                      </figure>
                    );
                  })}
                </div>
                <button onClick={this.handleSubmit} class="upload-img__btn">
                  Submit
                </button>
              </Fragment>
            ) : null}
            <ul className="album__img-list">
              {data &&
                data.map((item, index) => {
                  return (
                    <ImgList
                      key={index}
                      auth={auth.uid}
                      src={item.url}
                      deleteImgHandle={() =>
                        this.props.deleteImg(
                          item.name,
                          item.id,
                          this.props.firebase
                        )
                      }
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log("state from edit slide", state);
  return {
    auth: state.firebase.auth,
    data: state.firestore.ordered.Carousel,
    editingSlideShow: state.slideShow.editingSlideShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    exitEditMode: () => dispatch(exitEditMode()),
    editSlideShow: () => dispatch(editSlideShow()),
    uploadImg: (file, firebase) => dispatch(uploadImg(file, firebase)),
    deleteImg: (imageName, docId, firebase) =>
      dispatch(deleteImg(imageName, docId, firebase))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firebaseConnect(),
  firestoreConnect([{ collection: "Carousel" }])
)(EditSlide);
