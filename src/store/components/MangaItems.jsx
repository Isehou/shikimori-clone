import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { mangaSelector, fetchMangas } from "../slices/mangaSlice";
import "./style.css";

const MangaItems = () => {
  const dispatch = useDispatch();
  const { mangas } = useSelector(mangaSelector);

  useEffect(() => {
    dispatch(fetchMangas());
  }, [dispatch]);

  const renderMangas = () => {
    return mangas.map((el, i) => (
      <div className="block_content" key={el.id}>
        <img
          alt="#"
          src={"https://shikimori.one" + el.image.original}
          className="block_image"
        />
        <span className="block_text">{el.russian}</span>
      </div>
    ));
  };

  return <div className="element__list">{renderMangas()}</div>;
};

export default MangaItems;
