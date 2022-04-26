import React, { useState, useEffect } from "react";
import "./Animes.css";
import Home from "../Home/Home";

function Animes(props) {
  const [AnimesList, setAnimesList] = useState();
  return (
    <div className="animes_main">
      <div></div>

      <div className="animes_list">
        <div className="animes_list_text">
          {props.curr ? props.curr.name : ""}
        </div>
        <div className="animes_list_text">
          {props.curr ? props.curr.russian : ""}
        </div>
        <div className="animes_list_text">
          {props.curr ? props.curr.kind : ""}
        </div>
        <div className="animes_list_text">
          {props.curr ? props.curr.score : ""}
        </div>
        <div className="animes_list_text">
          {props.curr ? props.curr.aired_on : ""}
        </div>
        <div className="animes_list_text">
          {props.curr ? props.curr.episodes : ""}
        </div>
        <div className="animes_list_text">
          {props.curr ? props.curr.status : ""}
        </div>
      </div>
    </div>
  );
}

export default Animes;
