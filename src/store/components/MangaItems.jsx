import React from "react";
import "./style.css";

const MangaItems = ({ manga }) => {
  const renderManga = () => {
    return manga.map((el, i) => (
      <div className="block_content" key={el.id}>
        <img
          alt="#"
          src={"https://shikimori.one" + el.image.original}
          className="block_image"
        />
        <span className="block_text">{el.russian}</span>
        <button
          className="open_modal_btn"
          onClick={() => this.props.openModal(true)}
        >
          Подробнее
        </button>
      </div>
    ));
  };

  return <div className="element__list">{renderManga()}</div>;
};

export default MangaItems;
