import React, { useState, useEffect } from "react";
import "./Animes.css";
import Home from "../Home/Home";

function Animes(props) {
  const [AnimesList, setAnimesList] = useState();
  return (
    <div className="animes-main">
      <div className="animes-main_details">
        Animes:
        {/* <span>{props.getApiData.id}</span> */}
      </div>
    </div>
  );
}

export default Animes;
