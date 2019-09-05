import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import { uploadImg, test } from "../../store/actions/imgAction";

import Resizer from "react-image-file-resizer";

//import firebase from '../../config/fbConfig'
class ImgUpload extends Component {
  state = {
    isUploading: false,
    progress: 0,
    image: null,
    imageName: null,
    imageUrl: null,
    album: "choose album",
    collection: "gallery"
  };
  handleChange = e => {
    this.setState({
      image: e.target.files[0]
    });
  };
  handleSelect = e => {
    this.setState({
      album: e.target.value
    });
    //console.log(this.state.album);
  };
  // test = () => {
  //   alert("you choose " + this.state.album);
  // };
  handleSubmit = e => {
    e.preventDefault();
    const { album, imageName, collection, imageUrl } = this.state;
    // if (album === "choose album" || image === null) {
    //   alert("Please select album and image");
    // } else {
    //   this.props.uploadImg(album, image, collection, this.props.firebase);
    // }
    this.props.test(imageUrl, imageName, this.props.firebase);
  };
  fileChange = event => {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        event.target.files[0],
        200,
        200,
        "JPEG",
        100,
        0,
        uri => {
          this.setState({
            imageUrl: uri
          });
          console.log(this.state);
        },
        "base64"
      );
    }
    this.setState({
      imageName: event.target.files[0].name
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/admin" />;
    }

    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input name="image" type="file" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <select onChange={this.handleSelect} value={this.state.album}>
              <option value="choose album">Select album</option>
              <option value="slideShow">Hompage slide show</option>
              <option value="testing">testing</option>
            </select>
          </div>
          <button>Upload</button>
        </form> */}

        <form>
          <input type="file" onChange={this.fileChange} />
          <button onClick={this.handleSubmit}>Test</button>
        </form>
        {this.state.imageUrl && <p>there is {this.state.imageName} </p>}
        {this.state.imageUrl && <img src={this.state.imageUrl} alt="test" />}
      </div>

      // <FileUploader accept='image/' name='image'/>
    );
  }
}
const mapStateToProps = state => {
  //console.log("state from upload img", state);
  return { auth: state.firebase.auth, state };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadImg: (album, newImg, collection, fb) =>
      dispatch(uploadImg(album, newImg, collection, fb)),
    test: (imgUrl, imageName, fb) => dispatch(test(imgUrl, imageName, fb))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ImgUpload);
