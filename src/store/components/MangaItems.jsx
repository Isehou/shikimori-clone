import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { mangaSelector, fetchManga } from "../slices/mangaSlice";
import "./style.css";

const MangaItems = () => {
  const dispatch = useDispatch();
  const { manga } = useSelector(mangaSelector);

  useEffect(() => {
    dispatch(fetchManga());
  }, [dispatch]);

  const renderManga = () => {
    return manga.map((el, i) => (
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

  return <div className="element__list">{renderManga()}</div>;
};

export default MangaItems;
