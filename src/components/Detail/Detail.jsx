import React, { useContext, useEffect, useState } from "react";
import icon_like from "../img/like.png";
import icon_likeActive from "../img/like_active.png";
import icon_delete from "../img/delete.png";
import "./Detail.css";
import { context } from "../context/Context";
import icon_back from "../img/arrow_left.png";
import { useNavigate } from "react-router";

const Detail = () => {
  const { detail, handleChekFavorite, handlePostFavorites, deleteImg } =
    useContext(context);
  const navigation = useNavigate();
  console.log(detail);

  return (
    <div className="detail">
      <header className="detail__header">
        <img onClick={() => navigation(-1)} src={icon_back} alt="" />
        <p>{detail.name}</p>
      </header>
      <div className="detail__content">
        <img src={detail.url} alt="" />
      </div>
      <div className="detail__row_btn">
        <div className="detail__btn">
          <button onClick={() => handlePostFavorites(detail)}>
            <img
              src={handleChekFavorite(detail.id) ? icon_likeActive : icon_like}
              alt=""
            />{" "}
            {handleChekFavorite(detail.id)
              ? "Убрать из избранного"
              : "Добавить в избранное"}
          </button>
          <div></div>
          <button onClick={() => (deleteImg(detail.id), navigation(-1))}>
            <img src={icon_delete} alt="" /> Удалить изображение
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
