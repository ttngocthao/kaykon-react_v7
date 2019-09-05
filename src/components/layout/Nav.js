import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PublicLinks from "./PublicLinks";
import AdminLinks from "./AdminLinks";

import KaykonLogo from "../../images/asset/logo.jpg";

const Nav = props => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { auth } = props;
  return (
    <nav className="nav-mobile">
      <div className="menu-bar">
        <Link to="/" className="logo-container">
          <img src={KaykonLogo} alt="Kaykon logo" />
        </Link>
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          {menuOpened ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </div>
      </div>
      <ul
        className={`menu-list ${menuOpened ? "active" : ""}`}
        onClick={() => setMenuOpened(false)}
      >
        <li className="menu-item">
          <Link to="/">Trang chủ</Link>
        </li>

        <li className="menu-item">
          <Link to="/events">Sự kiện</Link>
        </li>

        <li className="menu-item">
          <Link to="/contact">Liên hệ</Link>
        </li>

        <li className="menu-item">
          <Link to="/gallery">Thư Viện Hình</Link>
        </li>

        <li className="menu-item">
          <Link to="/menu">Thực đơn</Link>
        </li>

        <li className="menu-item">
          <Link to="/curriculum">Chương trình học</Link>
        </li>

        <li className="menu-item">
          <Link to="/excursion">Dã ngoại</Link>
        </li>
        {!auth.uid ? <PublicLinks /> : <AdminLinks />}
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
