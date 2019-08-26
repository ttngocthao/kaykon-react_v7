import React from "react";
import FooterBanner from "../../images/asset/footer-banner-small.png";
import FbIcon from "../../images/asset/fb.png";
import InstIcon from "../../images/asset/instagram.png";
import ZaloIcon from "../../images/asset/zalo.png";
const Footer = () => {
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
      <section>
        <img src={FooterBanner} alt="footer" width="100%" />
      </section>
      <ul>
        <li>
          <a href="https://goo.gl/maps/EvpJXC72s7G2" target="blank">
            <i className="fas fa-map-marker-alt" />{" "}
          </a>
          11F/22 Bạch Đằng, P.2, Q.Tân Bình, tpHCM
        </li>
        <li>
          <i className="fas fa-phone-volume" />
          <a href="tel:0917345801">0917345801</a> &amp;
          <a href="tel:0983201317">0983201317</a>
        </li>
        <li>
          <i className="fas fa-envelope-open" />
          kaykonkindergarten@gmail.com
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
