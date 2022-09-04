import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { animeSelector, fetchAnimes } from "../slices/animeSlice";

const AnimeItems = () => {
  const dispatch = useDispatch();
  const { loading, hasErrors, animes } = useSelector(animeSelector);

  useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);

  const renderAnimes = () => {
    // if (loading) return <p>Loading animes...</p>;
    // if (hasErrors) return <p>Cannot display animes...</p>;

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
    <section>
      <h1>AnimeList</h1>
      <div className="content">{renderAnimes}</div>
    </section>
  );
};

export default AnimeItems;
