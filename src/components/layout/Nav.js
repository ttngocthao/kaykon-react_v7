import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import PublicLinks from "./PublicLinks";
import AdminLinks from "./AdminLinks";

const Nav = props => {
  const { auth } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="brand-logo">
            Brand logo
          </Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/curriculum">Curriculum</Link>
        </li>
        <li>
          {" "}
          <Link to="/excursion">Excursion</Link>
        </li>

        {auth.uid ? (
          <li>
            <AdminLinks />{" "}
          </li>
        ) : (
          <li>
            <PublicLinks />
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  //console.log("nav", state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Nav);
