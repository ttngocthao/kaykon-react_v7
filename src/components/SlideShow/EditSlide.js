import React, { Component } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";

import { exitEditMode } from "../../store/actions/slideShowAction";

class EditSlide extends Component {
  state = {
    images: null,
    albumName: "Carousel"
  };
  handleChange = e => {
    const images = Array.from(e.target.files);
    this.setState({
      images
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { images, albumName } = this.state;
    console.log("image+albumName", images, albumName);
    // for (let image of images) {
    //   this.props.uploadImg(albumName, image, this.props.firebase);
    // }

    this.state.images.forEach(image => {
      this.props.uploadImg(albumName, image, this.props.firebase);
    });

    //this.props.uploadImg(albumName,this.state.images,this.props.firebase)
  };
  exitEditModeHandle = () => {
    this.props.exitEditMode();
  };
  render() {
    return (
      <div className="modal__container">
        <div className="modal__content-wrap">
          <span
            className="btn__close-modal-box"
            onClick={this.exitEditModeHandle}
          >
            &times;
          </span>
          <h1>upload images for slide show here</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                name="images"
                multiple
                type="file"
                onChange={this.handleChange}
              />
            </div>
            <button>Upload</button>
          </form>
          <h2>show all the images in slideshow gallery</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state from edit slide", state);
  return { state };
};

const mapDispatchToProps = dispatch => {
  return {
    exitEditMode: () => dispatch(exitEditMode())
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
