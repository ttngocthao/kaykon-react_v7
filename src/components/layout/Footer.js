import React from "react";

import { connect } from "react-redux";

import FooterBanner from "../../images/asset/footer-banner-small.png";
import FbIcon from "../../images/asset/fb.png";
import InstIcon from "../../images/asset/instagram.png";
import ZaloIcon from "../../images/asset/zalo.png";

const Footer = props => {
  const { auth } = props;
  return (
    <footer>
      <figure className="social-media">
        <a
          href="https://www.facebook.com/KayKonMontessori/"
          title="Facebook"
          target="blank"
        >
          <img className="social-media__img" src={FbIcon} alt="" />
        </a>
        <a
          href="https://www.instagram.com/kaykonkindergarten/"
          title="Instagram"
          target="blank"
        >
          <img src={InstIcon} alt="" className="social-media__img" />
        </a>
        <a href="google.com" title="Zalo">
          <img src={ZaloIcon} alt="" className="social-media__img" />
        </a>
      </figure>
      <section className="footer-banner">
        <img src={FooterBanner} alt="footer" className="footer-banner__img" />
      </section>
      <ul className="footer__infor-list">
        <li className="footer__infor-item">
          <a href="https://goo.gl/maps/EvpJXC72s7G2" target="blank">
            <i className="fas fa-map-marker-alt footer-icons" />
            11F/22 Bạch Đằng, P.2, Q.Tân Bình, tpHCM
          </a>
        </li>
        <li className="footer__infor-item">
          <i className="fas fa-phone-volume footer-icons" />
          <a href="tel:0917345801">0917345801</a> &amp;
          <a href="tel:0983201317">0983201317</a>
        </li>
        <li className="footer__infor-item">
          <i className="fas fa-envelope-open footer-icons" />
          <a href="mailto:kaykonkindergarten@gmail.com">
            kaykonkindergarten@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};
const mapStateToProps = state => {
  //console.log("nav", state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Footer);
