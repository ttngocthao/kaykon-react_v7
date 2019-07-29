import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
//import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";

import ImgSlide from "./ImgSlide";
import Arrow from "./Arrow";
import ImgIndicator from "./ImgIndicator";
import EditSlide from "./EditSlide";

import {
  getSlideShow,
  previousSlide,
  nextSlide,
  editSlideShow
} from "../../store/actions/slideShowAction";

class Carousel extends Component {
  componentDidMount() {
    this.props.getSlideShow();
    //slideShow runs automatically
    // this.carouselInterval = setInterval(() => {
    //   this.nextSlide();
    // }, 10000);
  }
  // componentWillUnmount() {
  //   clearInterval(this.carouselInterval);
  // }

  previousSlide = () => {
    const { data } = this.props;
    this.props.previousSlide(data);
  };
  nextSlide = () => {
    const { data } = this.props;
    this.props.nextSlide(data);
  };
  editingSlideShowHandle = () => {
    this.props.editSlideShow();
  };

  render() {
    // console.log("this.state", this.state);
    // console.log("this.props", this.props);
    const { data, currentImgIndex, auth, editingSlideShow } = this.props;

    return (
      <Fragment>
        <div className="carousel-container">
          {data ? (
            <Fragment>
              {auth.uid && (
                <p
                  className="btn__edit-slideShow"
                  onClick={this.editingSlideShowHandle}
                >
                  Edit Slide Show
                </p>
              )}
              {editingSlideShow && <EditSlide />}
              <Arrow
                direction="left"
                clickFunction={this.previousSlide}
                glyph="&#9664;"
              />
              <ImgSlide url={data && data[currentImgIndex].url} />
              <Arrow
                direction="right"
                clickFunction={this.nextSlide}
                glyph="&#9654;"
              />
            </Fragment>
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
        <div className="indicator-wrap">
          {data && data.length !== 0
            ? data.map((img, ind) => (
                <ImgIndicator
                  key={ind}
                  index={ind}
                  currentImgIndex={currentImgIndex}
                />
              ))
            : "loading"}
        </div>
      </Fragment>
    );
  }
} //state.firestore.ordered.Carousel
const mapStateToProps = state => {
  console.log("state", state);
  return {
    data: state.slideShow.data,
    currentImgIndex: state.slideShow.currentImgIndex,
    editingSlideShow: state.slideShow.editingSlideShow,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSlideShow: () => dispatch(getSlideShow()),
    previousSlide: data => dispatch(previousSlide(data)),
    nextSlide: data => dispatch(nextSlide(data)),
    editSlideShow: () => dispatch(editSlideShow())
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firebaseConnect()
)(Carousel);
