import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const PublicLinks = () => {
  return (
    <Fragment>
      <li className="menu-item">
        <Link to="/admin">
          <i className="fas fa-user-lock  footer-icons" />
          Sign in as admin
        </Link>
      </li>
    </Fragment>
  );
};

export default PublicLinks;
