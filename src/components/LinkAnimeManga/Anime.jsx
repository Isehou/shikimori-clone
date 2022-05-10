import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function Anime(props) {
  const [animeData, setAnimeData] = useState(null);
  const [animeDetail, setAnimeDetail] = useState();
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setAnimeData(res))
  }, [params]);
  return (
    <div className="animes_main">
      <div className="animes_main_details">
        {/* <pre>{JSON.stringify(params, null, 5)}</pre> */}

        <h2>
          {animeData ? animeData.name : ""} /
          {animeData ? animeData.russian : ""}
        </h2>
        <h4>
          {animeData ? animeData.english : ""} / 
          {animeData ? animeData.japanese : ""}
        </h4>
        <img 
          className="animes_image_block" 
          src={"animeData.image.original"} alt="#">
        </img>
        
        <p>Type: {animeData ? animeData.kind : ""}</p>
        <p>Rating: {animeData ? animeData.score : ""}</p>
        <p>Aired on: {animeData ? animeData.aired_on : ""}</p>
        <p>released_on: {animeData ? animeData.released_on : ""}</p>
        <p>Episode: {animeData ? animeData.episodes : ""}</p>
        <p>Status: {animeData ? animeData.status : ""}</p>
        </div>
    </div>
    
  );
}

export default Anime;