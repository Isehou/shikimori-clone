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
  const [titleData, setTitleData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setTitleData(res));
  }, [params]);

  return (
    <div className="title">
      <LinkBack></LinkBack>
      {titleData && (
        <div className="title-content">
          <DetailsTitle
            name={titleData.name}
            russian={titleData.russian}
            english={titleData.english}
            japanese={titleData.japanese}
          ></DetailsTitle>
          {titleData?.image?.original && (
            <DetailsImage src={titleData.image.original} />
          )}
          <div className="title-text__block">
            ИНФОРМАЦИЯ
            <DetailsInfo
              data={[
                { title: "Тип:", info: titleData.kind },
                { title: "Начало показа: с", info: titleData.aired_on },
                { title: "Дата релиза:", info: titleData.released_on },
                { title: "Количество серий:", info: titleData.episodes },
              ]}
            />
            <br />
            Рейтинг
            <StarRating rating={Number(titleData.score)}></StarRating>
          </div>
          {titleData.screenshots && <SwiperImg list={titleData.screenshots} />}
          <div className="title-content__description">
            <div>{titleData.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeTab;
