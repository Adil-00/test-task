import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_img from "./components/Add_img/Add_img";
import ContextProvider from "./components/context/Context";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";

const Routers = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add_img />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default Routers;
