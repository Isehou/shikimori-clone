import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsTitle from "./details/DetailsTitle";
import DetailsImage from "./details/DetailsImage";
import DetailsInfo from "./details/DetailsInfo";
import StarRating from "./star-rating/StarRating";
import SwiperImg from "./swiper/SwiperImg";
import LinkBack from "../properties/link-back/LinkBack";

function MangaTab(props) {
  const [titleData, setTitleData] = useState(null);
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/mangas/${params.id}`)
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
          )}{" "}
          <div className="title-text__block">
            <DetailsInfo
              data={[
                { title: "Тип:", info: titleData.kind },
                {
                  title: "Начало показа: с",
                  info: titleData.aired_on,
                },
                { title: "Дата релиза:", info: titleData.released_on },
                { title: "Количество глав:", info: titleData.chapters },
                { title: "Статус:", info: titleData.status },
                { title: "Объем:", info: titleData.volumes },
              ]}
            />
            <br />
            Рейтинг<StarRating rating={Number(titleData.score)}></StarRating>
          </div>
          <div className="title-content__description">
            <div>{titleData.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MangaTab;
