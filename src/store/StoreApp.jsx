import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import "./store.css";
import AnimeItems from "./components/AnimeItems";
import MangaItems from "./components/MangaItems";

const StoreApp = () => {
  const dispatch = useDispatch();

  return (
    <div className="home__page">
      <div className="wrapper">
        <div className="element__list">
          <MangaItems></MangaItems>
          <hr></hr>
          <AnimeItems></AnimeItems>
        </div>
      </div>
    </div>
  );
};
export default StoreApp;
