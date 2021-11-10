import React, { useContext } from "react";
import { context } from "../context/Context";
import { useNavigate } from "react-router";
import icon_like from "../img/like.png";
import icon_likeActive from "../img/like_active.png";
import "./Img_card.css";

const Img_card = ({ item }) => {
  const { handleChekFavorite, handlePostFavorites, detaills } =
    useContext(context);

  const navigation = useNavigate();

  return (
    <div className="img_card">
      <img
        className="img_card_img"
        onClick={() => (detaills(item.id), navigation("/detail"))}
        src={item.url}
        alt=""
      />
      <img
        className="img_card__iconLike"
        width="300"
        src={handleChekFavorite(item.id) ? icon_likeActive : icon_like}
        alt=""
        onClick={() => handlePostFavorites(item)}
      />
    </div>
  );
};

export default Img_card;
