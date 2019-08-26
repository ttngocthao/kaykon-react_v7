import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Resizer from "react-image-file-resizer";

import { createNewExcur } from "../../store/actions/excursionAction";
import NotiTemp from "../Notification/NotiTemp";
// import  useOutsideClick from '../../useOutsideClick'

class AddExcurForm extends Component {
  state = {
    name: "",
    text: "",
    image: "",
    date: "",
    imageB64: "",
    notifiMsg: null
  };

  dateHandleChange = date => {
    this.setState({
      date: date
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFileChange = e => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        e.target.files[0],
        200,
        200,
        "JPEG",
        100,
        0,
        uri => {
          this.setState({
            imageB64: uri
          });
          //console.log(this.state);
        },
        "base64"
      );
    }
    this.setState({
      image: e.target.files[0]
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    //console.log("state from add excur form", this.state);
    this.props.createNewExcur(this.state, this.props.firebase);
    //direct to excursion page after create a new event
    this.setState({
      notifiMsg: "Page is redirected in 5s..."
    });
    setTimeout(() => {
      this.setState({
        notifiMsg: null
      });
      this.props.history.length && this.props.history.push("/excursion");
    }, 5000);
  };

  render() {
    return (
      <Fragment>
        <form>
          <div className="">
            <div>
              <div className="input-field">
                <label htmlFor="date">Excursion Date</label>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.dateHandleChange}
                  dateFormat="dd-MM-yy"
                />
              </div>
              <div className="input-field">
                <label htmlFor="name">Excursion Name</label>
                <input
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="input-field">
                <label htmlFor="text">Event Content</label>
                <textarea
                  name="text"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
              </div>
              <div className="input-field">
                <input
                  name="image"
                  type="file"
                  onChange={this.handleFileChange}
                />
              </div>
              <div>
                {this.state.imageB64 && (
                  <figure>
                    <img src={this.state.imageB64} alt="" />
                  </figure>
                )}
              </div>
              <div className="input-field">
                <button
                  className="form-submit-btn"
                  onClick={this.handleFormSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
        {this.state.notifiMsg && <NotiTemp notifiMsg={this.state.notifiMsg} />}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    state,
    notifiMsg: state.excursion.notifiMsg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createNewExcur: (newExcur, firebase) =>
      dispatch(createNewExcur(newExcur, firebase))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AddExcurForm);
