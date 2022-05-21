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
        <div className="animes_main_details">
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
          <p>Выпущен: {aniMangaData.aired_on}</p>
          <p>Дата релиза: {aniMangaData.released_on}</p>
          <p>Главы: {aniMangaData.chapters}</p>
          <p>Статус: {aniMangaData.status}</p>
          <p>Объем: {aniMangaData.volumes}</p>
        </div>
      )}
    </div>
  );
}

export default Manga;
