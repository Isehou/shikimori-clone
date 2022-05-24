import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Manga(props) {
  const [aniMangaData, setAniMangaData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/mangas/${params.id}`)
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
          <div className="aniManga-text_block">
            <p>Тип: {aniMangaData.kind}</p>
            <p>Начало показа: с {aniMangaData.aired_on ? aniMangaData.aired_on : "Неизвестно"}</p>
            <p>Дата релиза: {aniMangaData.released_on ? aniMangaData.released_on >= null : "Неизвестно"} </p>
            <p>Количество глав: {aniMangaData.chapters ? aniMangaData.chapters >= 0  : "Неизвестно"}</p>
            <p>Статус: {aniMangaData.status}</p>
            <p>Объем: {aniMangaData.volumes ? aniMangaData.volumes >= 0 : "Неизвестно" }</p>
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

export default Manga;
