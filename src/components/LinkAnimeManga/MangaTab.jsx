import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsTitle from "./Details/DetailsTitle";
import DetailsImage from "./Details/DetailsImage";
import DetailsInfo from "./Details/DetailsInfo";

function MangaTab(props) {
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
          <DetailsTitle
            name={aniMangaData.name}
            russian={aniMangaData.russian}
            english={aniMangaData.english}
            japanese={aniMangaData.japanese}
          ></DetailsTitle>
          {aniMangaData?.image?.original && (
            <DetailsImage src={aniMangaData.image.original} />
          )}
          <div className="aniManga-text_block">
            <DetailsInfo
              data={[
                { title: "Тип:", info: aniMangaData.kind },
                {
                  title: "Начало показа: с",
                  info: aniMangaData.aired_on,
                },
                { title: "Дата релиза:", info: aniMangaData.released_on },
                { title: "Количество глав:", info: aniMangaData.chapters },
                { title: "Статус:", info: aniMangaData.status },
                { title: "Объем:", info: aniMangaData.volumes },
                { title: "Рейтинг:", info: aniMangaData.score },
              ]}
            />
          </div>
          <div className="aniManga-content_description">
            <div>{aniMangaData.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MangaTab;
