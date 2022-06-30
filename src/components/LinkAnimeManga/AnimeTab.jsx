import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import DetailsTitle from "./Details/DetailsTitle";
import DetailsImage from "./Details/DetailsImage";
import DetailsInfo from "./Details/DetailsInfo";
import StarRating from "./StarRating/StarRating";
import SwiperImg from "./Swiper/SwiperImg";

function AnimeTab(props) {
  const [aniMangaData, setAniMangaData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setAniMangaData(res));
  }, [params]);
  return (
    <div className="aniManga">
      {aniMangaData && (
        <div className="aniManga__content-details">
          <DetailsTitle
            name={aniMangaData.name}
            russian={aniMangaData.russian}
            english={aniMangaData.english}
            japanese={aniMangaData.japanese}
          ></DetailsTitle>

          {aniMangaData?.image?.original && (
            <DetailsImage src={aniMangaData.image.original} />
          )}
          {aniMangaData.screenshots && (
            <SwiperImg src={aniMangaData.screenshots.preview}></SwiperImg>
          )}

          <div className="aniManga__text-block">
            ИНФОРМАЦИЯ
            <DetailsInfo
              data={[
                { title: "Тип:", info: aniMangaData.kind },
                { title: "Начало показа: с", info: aniMangaData.aired_on },
                { title: "Дата релиза:", info: aniMangaData.released_on },
                { title: "Количество серий:", info: aniMangaData.episodes },
                { title: "Рейтинг:", info: aniMangaData.score },
              ]}
            />
          </div>
          {aniMangaData && (
            <StarRating rating={Number(aniMangaData.score)}></StarRating>
          )}
          <div className="aniManga__content-description">
            <div>{aniMangaData.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeTab;
