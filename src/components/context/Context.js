import axios from "axios";
import React, { Children, useReducer, useState } from "react";
import { API } from "../Helpers/Helpers";
export const context = React.createContext();

const INIT_STATE = {
  all_img: [],
  favorites: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_IMG":
      return { ...state, all_img: action.payload };
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [detail, setDetail] = useState(null);

  const getImg = async () => {
    const { data } = await axios(`${API}/images`);

    dispatch({
      type: "GET_IMG",
      payload: data,
    });
  };

  const deleteImg = async (id) => {
    await axios.delete(`${API}/images/${id}`);

    getImg();
  };

  const getFavorites = async () => {
    const { data } = await axios(`${API}/favorites`);

    dispatch({
      type: "GET_FAVORITES",
      payload: data,
    });
  };

  const imgPost = async (obj) => {
    await axios.post(`${API}/images`, obj);
    getImg();
  };

  const handleDeleteFavorites = async (obj) => {
    const newArr = state.favorites.filter((item) => item.id !== obj.id);

    dispatch({
      type: "GET_FAVORITES",
      payload: newArr,
    });

    await axios.delete(`${API}/favorites/${obj.id}`);
  };

  const detaills = async (id) => {
    const newArr = state.all_img.filter((item) => item.id === id);
    setDetail(newArr[0]);
  };

  const handlePostFavorites = async (obj) => {
    const newArr = state.favorites.filter((item) => item.id === obj.id);

    if (newArr.length > 0) {
      handleDeleteFavorites(obj);

      const newArr2 = state.favorites.filter((item) => item.id !== obj.id);

      dispatch({
        type: "GET_FAVORITES",
        payload: newArr2,
      });

      return;
    }

    let newArr3 = state.favorites;
    newArr3.push(obj);

    dispatch({
      type: "GET_FAVORITES",
      payload: newArr3,
    });

    await axios.post(`${API}/favorites`, obj);
  };

  const handleChekFavorite = (id) => {
    let newArr = state.favorites.filter((item) => item.id === id);

    if (newArr.length > 0) return true;

    return false;
  };

  return (
    <context.Provider
      value={{
        all_img: state.all_img,
        favorites: state.favorites,
        detail: detail,
        imgPost,
        getImg,
        deleteImg,
        getFavorites,
        handlePostFavorites,
        handleChekFavorite,
        detaills,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
