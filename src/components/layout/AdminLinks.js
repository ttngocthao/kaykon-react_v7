import React, { Fragment } from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

import { signOut } from "../../store/actions/authAction";

import LogoIcon from "../../images/asset/iconlogo.png";

const AdminLinks = props => {
  const handleSignOut = () => {
    props.signOut(props.firebase);
  };
  return (
    <Fragment>
      {/* <li>
        <NavLink to="/create-event">Create an event</NavLink>
      </li>
      <li>
        <NavLink to="/upload-photo">Upload Photo</NavLink>
      </li>
      <li>
        <NavLink to="/create-album">Create album</NavLink>
      </li> */}
      <li className="admin-links__wrap menu-item">
        <span
          className="admin-links kaykon-icon"
          style={{ backgroundImage: `url(${LogoIcon})` }}
        />
        <span onClick={handleSignOut} className="admin-links btn btn__sign-out">
          <i className="fas fa-sign-out-alt footer-icons" />
          Sign out
        </span>
      </li>
    </Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: firebase => dispatch(signOut(firebase))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    null,
    mapDispatchToProps
  )
)(AdminLinks);
