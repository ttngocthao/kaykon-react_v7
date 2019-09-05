import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

import { signIn } from "../../store/actions/authAction";

import BgImg from "../../images/homePage/excurImg.jpg";

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const authData = {
      firebase: this.props.firebase,
      credentials: this.state
    };
    this.props.signIn(authData);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/admin-landing" />;
    }
    return (
      <section
        className="form-container page-content form-container__sign-in"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <form className="form sign-in-form" onSubmit={this.handleSubmit}>
          <h3 className="form-heading">Sign in as Admin</h3>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Admin@email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field input-field__btn">
            <div className="form-submit-btn" onClick={this.handleSubmit}>
              Log in as Admin
            </div>
            {auth.authErr && <div>auth.authErr</div>}
          </div>
        </form>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInForm);
