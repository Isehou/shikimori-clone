import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function Anime(props) {
  const [animeData, setAnimeData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setAnimeData(res));
  }, [params]);
  return (
    <div className="aniManga-main">
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
          <p>Выпущен: {animeData.aired_on}</p>
          <p>Дата релиза: {animeData.released_on}</p>
          <p>Эпизоды: {animeData.episodes}</p>
          <p>Статус: {animeData.status}</p>
        </div>
      )}
    </div>
  );
}

export default Anime;
