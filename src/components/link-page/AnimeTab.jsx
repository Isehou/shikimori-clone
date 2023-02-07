import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams, useHistory, Link } from "react-router-dom";
import DetailsTitle from "./details/DetailsTitle";
import DetailsImage from "./details/DetailsImage";
import DetailsInfo from "./details/DetailsInfo";
import StarRating from "./star-rating/StarRating";
import SwiperImg from "./swiper/SwiperImg";
import LinkBack from "../properties/link-back/LinkBack";

function AnimeTab(props) {
  const [aniMangaData, setAniMangaData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setAniMangaData(res));
  }, [params]);

  return (
    <div className="title">
      <LinkBack></LinkBack>
      {aniMangaData && (
        <div className="title-content">
          <DetailsTitle
            name={aniMangaData.name}
            russian={aniMangaData.russian}
            english={aniMangaData.english}
            japanese={aniMangaData.japanese}
          ></DetailsTitle>
          {aniMangaData?.image?.original && (
            <DetailsImage src={aniMangaData.image.original} />
          )}
          <div className="title-text__block">
            ИНФОРМАЦИЯ
            <DetailsInfo
              data={[
                { title: "Тип:", info: aniMangaData.kind },
                { title: "Начало показа: с", info: aniMangaData.aired_on },
                { title: "Дата релиза:", info: aniMangaData.released_on },
                { title: "Количество серий:", info: aniMangaData.episodes },
              ]}
            />
            <br />
            Рейтинг
            <StarRating rating={Number(aniMangaData.score)}></StarRating>
          </div>
          {aniMangaData.screenshots && (
            <SwiperImg list={aniMangaData.screenshots} />
          )}
          <div className="title-content__description">
            <div>{aniMangaData.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeTab;
