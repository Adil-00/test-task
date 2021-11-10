import React, { useContext, useEffect } from "react";
import { context } from "../context/Context";
import Img_card from "../Img_card/Img_card";
import "./Img_list.css";

const Img_list = () => {
  const { all_img, getImg, getFavorites } = useContext(context);

  useEffect(() => {
    getImg();
    getFavorites();
  }, []);
  return (
    <>
      <div className="img_all">
        {all_img.length > 0 ? (
          all_img.map((item, id) => <Img_card item={item} key={id} />)
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </>
  );
};

export default Img_list;
