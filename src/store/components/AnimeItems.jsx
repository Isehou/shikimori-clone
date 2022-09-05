import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { animeSelector, fetchAnimes } from "../slices/animeSlice";
import "./AnimeItems.css";

const AnimeItems = () => {
  const dispatch = useDispatch();
  const { animes } = useSelector(animeSelector);

  useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);

  const renderAnimes = () => {
    return animes.map((el, i) => (
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

  return (
    <div className="home__page">
      <div className="element__list">{renderAnimes()}</div>
    </div>
  );
};

export default AnimeItems;
