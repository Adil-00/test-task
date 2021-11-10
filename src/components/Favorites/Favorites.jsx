import React, { useContext, useEffect } from "react";
import { context } from "../context/Context";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img_card from "../Img_card/Img_card";
import "./Favorites.css";

const Favorites = () => {
  const { favorites, getFavorites } = useContext(context);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="favorites">
      <Header />
      <div className="favorites__content">
        {favorites.length > 0 ? (
          favorites.map((item) => <Img_card key={item.id} item={item} />)
        ) : (
          <p className="content__title">Пусто</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
