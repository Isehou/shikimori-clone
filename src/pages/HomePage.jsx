import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

import { useSelector } from "react-redux";
import { animeSelector } from "../store/slices/animeSlice.tsx";
import { mangaSelector } from "../store/slices/mangaSlice.tsx";

import "./page-style.css";
import "./home-page.css";
import "../components/properties/loader-window.css";
import onepiece from "../img/onepiece-2.jpg";

const HomePage = () => {
  const { animes, manga, loading } = useSelector(animeSelector, mangaSelector);

  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    return fetch(`https://shikimori.one/api/animes?&order=popularity&limit=8`)
      .then((res) => res.json())
      .then((json) => {
        setAnimeData(json);
      });
  }, []);

  const [mangaData, setMangaData] = useState([]);
  useEffect(() => {
    return fetch(`https://shikimori.one/api/mangas?&order=popularity&limit=8`)
      .then((res) => res.json())
      .then((json) => {
        setMangaData(json);
      });
  }, []);

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-2rem)" },
    to: { opacity: 1, transform: "translateY(2rem)" },
    config: { duration: 500 },
  });
  return (
    <div className="homepage">
      {loading && <div className="loader"></div>}
      <div className="homepage-main">
        <animated.div style={props}>
          <div className="main-bg-block">
            <p className="main-title-name">Shikimori Clone</p>
            <img className="image" src={onepiece} alt="#" />
          </div>
          <div className="main-content">
            <div className="title-block">
              <div className="title-text">В тренде - Аниме</div>
              <Link className="links" to={"/manga"}>
                <button className="arrow-right">Показать »</button>
              </Link>
            </div>
            <div className="trending-data-block">
              {animeData.map((el, i) => (
                <div className="trending-data-content" key={el.id}>
                  <img
                    alt="#"
                    src={"https://shikimori.one" + el.image.original}
                    className="trending-img"
                  />
                  <span className="trending-text">{el.russian}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="main-content">
            <div className="title-block">
              <div className="title-text">В тренде - Манга</div>
              <Link className="links" to={"/manga"}>
                <button className="arrow-right">Показать »</button>
              </Link>
            </div>
            <div className="trending-data-block">
              {mangaData.map((el, i) => (
                <div className="trending-data-content" key={el.id}>
                  <img
                    alt="#"
                    src={"https://shikimori.one" + el.image.original}
                    className="trending-img"
                  />
                  <span className="trending-text">{el.russian}</span>
                </div>
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};
export default HomePage;
