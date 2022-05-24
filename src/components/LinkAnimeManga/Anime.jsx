import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function Anime(props) {
  const [aniMangaData, setAniMangaData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setAniMangaData(res));
  }, [params]);
  return (
    <div className="aniManga-main">
      {aniMangaData && (
        <div className="aniManga-content_details">
          <h2>
            {aniMangaData.name}  |  {aniMangaData.russian}  |  {aniMangaData.english}  |  {aniMangaData.japanese}
          </h2>
          {aniMangaData?.image?.original && (
            <img
              className="aniManga-image_block"
              src={"https://shikimori.one" + aniMangaData.image.original}
              alt="#"
            ></img>
          )}
          <div className="aniManga-text_block"> ИНФОРМАЦИЯ
            <p>Тип: {aniMangaData.kind}</p>
            <p>Начало показа: с {aniMangaData.aired_on}</p>
            <p>Дата релиза: в {aniMangaData.released_on}</p>
            <p>Количество серий: {aniMangaData.episodes}</p>
            <p>Статус: {aniMangaData.status}</p>
            <p>Рейтинг: {aniMangaData.score}</p>
          </div>
          <div className="aniManga-content_description">
            ОПИСАНИЕ 
            <div>
              {aniMangaData.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Anime;
