import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { context } from "../context/Context";
import "./Add_img.css";

const Add_img = () => {
  const { imgPost } = useContext(context);
  const [inpValue, setInpValue] = useState("");
  const navogation = useNavigate();

  const inpChange = (e) => {
    const obj = { ...inpValue, [e.target.dataset.name]: e.target.value };
    setInpValue(obj);
  };

  const addBtn = () => {
    if (!inpValue.name || !inpValue.url) return;
    imgPost(inpValue);
    navogation("/");
  };

  return (
    <div className="add_img">
      <input
        placeholder="название"
        type="text"
        data-name="name"
        onChange={inpChange}
      />
      <input
        placeholder="адресс"
        type="text"
        data-name="url"
        onChange={inpChange}
      />
      <button onClick={addBtn}>Add</button>
    </div>
  );
};

export default Add_img;
