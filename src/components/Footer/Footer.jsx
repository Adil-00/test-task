import React from "react";
import "./Footer.css";
import icon_gallery from "../img/gallery.png";
import icon_galleryActive from "../img/gallary_active.png";
import icon_favorites from "../img/favorite.png";
import icon_favoritesActive from "../img/favorite_active.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer__btn_gallary">
        <Link to="/">
          <img
            src={location.pathname === "/" ? icon_galleryActive : icon_gallery}
            alt=""
          />
        </Link>
      </div>
      <Link className="footer__btn_add" to="/add">
        add
      </Link>
      <div className="footer__btn_favorites">
        <Link to="/favorites">
          <img
            src={
              location.pathname === "/favorites"
                ? icon_favoritesActive
                : icon_favorites
            }
            alt=""
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
