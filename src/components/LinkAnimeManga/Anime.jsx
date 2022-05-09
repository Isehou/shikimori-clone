import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function Anime(props) {
  const [anime, setAnime] = useState();
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/animes/${params.id}`)
      .then((res) => res.json())
      .then((res) => setAnime(res));
  }, [params]);
  return (
    <div className="animes-main">
      <div className="animes-main_details">
        <h3>ANIME ID</h3>
        <p></p>
        <pre>{JSON.stringify(params, null, 5)}</pre>
      </div>
    </div>
  );
}

export default Anime;
