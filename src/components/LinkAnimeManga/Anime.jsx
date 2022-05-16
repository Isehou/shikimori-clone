import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function Anime(props) {
<<<<<<< HEAD
  const [animeData, setAnimeData] = useState(null);
=======
  const [aniMangaData, setAniMangaData] = useState(null);
>>>>>>> fb499de2d9aa6cbe5cdb4c4e7458f89791994f4f
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
<<<<<<< HEAD
      .then((res) => setAnimeData(res));
  }, [params]);
  return (
    <div className="animes_main">
      {animeData && (
        <div className="animes_main_details">
          <h2>
            {animeData.name} / {animeData.russian}
          </h2>
          <h3>
            {animeData.english} / {animeData.japanese}
          </h3>
          {animeData?.image?.original && (
            <img
              className="animes_image_block"
              src={"https://shikimori.one" + animeData.image.original}
              alt="#"
            ></img>
          )}
          <p>Тип: {animeData.kind}</p>
          <p>Рейтинг: {animeData.score}</p>
          <p>Aired on: {animeData.aired_on}</p>
          <p>released_on: {animeData.released_on}</p>
          <p>Episode: {animeData.episodes}</p>
          <p>Status: {animeData.status}</p>
=======
      .then((res) => setAniMangaData(res));
  }, [params]);
  return (
    <div className="aniManga-main">
      {aniMangaData && (
        <div className="aniManga-main_details">
          <h2>
            {aniMangaData.name} / {aniMangaData.russian}
          </h2>
          <h3>
            {aniMangaData.english} / {aniMangaData.japanese}
          </h3>
          {aniMangaData?.image?.original && (
            <img
              className="aniManga-image_block"
              src={"https://shikimori.one" + aniMangaData.image.original}
              alt="#"
            ></img>
          )}
          <p>Тип: {aniMangaData.kind}</p>
          <p>Рейтинг: {aniMangaData.score}</p>
          <p>Aired on: {aniMangaData.aired_on}</p>
          <p>released_on: {aniMangaData.released_on}</p>
          <p>Episode: {aniMangaData.episodes}</p>
          <p>Status: {aniMangaData.status}</p>
>>>>>>> fb499de2d9aa6cbe5cdb4c4e7458f89791994f4f
        </div>
      )}
    </div>
  );
}

export default Anime;
