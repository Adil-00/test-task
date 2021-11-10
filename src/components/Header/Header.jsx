import React from "react";
import { useLocation } from "react-router";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <p className="header__title">
        {location.pathname === "/"
          ? "Все изображения"
          : location.pathname === "/favorites"
          ? "Избранное"
          : ""}
      </p>
    </header>
  );
};

export default Header;
