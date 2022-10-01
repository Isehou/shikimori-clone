import React, { useState } from "react";
import "./style.css";

const AnimeItems = ({ animes, openModal }) => {
  return (
    <div className="element__list">
      {animes &&
        animes.map((el, i) => (
          <div className="block_content" key={el.id}>
            <img
              alt="#"
              src={"https://shikimori.one" + el.image.original}
              className="block_image"
            />
            <span className="block_text">{el.russian}</span>
            <button
              className="open_modal_btn"
              onClick={() => openModal(true, el)}
            >
              Подробнее
            </button>
          </div>
        ))}
    </div>
  );
};

export default AnimeItems;
