import React, { useState, useEffect } from "react";
import "./page-style.css";
import "./home-page.css";
import "../components/properties/loader-window.css";
import { Link } from "react-router-dom";
import onepiece from "../img/onepiece-2.jpg";
import { VscArrowRight } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { animeSelector, fetchAnimes } from "../store/slices/animeSlice";
import { mangaSelector, fetchManga } from "../store/slices/mangaSlice";

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

  return (
    <div className="homepage">
      {loading && <div className="loader"></div>}
      <div className="homepage__main">
        <div className="main__bg">
          <p className="main-title-name">Shikimori Clone</p>
          <img className="image" src={onepiece} alt="#" />
        </div>
        <div className="main__content">
          <div className="title">В тренде - Аниме</div>

          <Link className="links" to={"/anime"}>
            Показать
            <span className="arrow-right">
              <VscArrowRight></VscArrowRight>
            </span>
          </Link>
          <div className="trending-data">
            {animeData.map((el, i) => (
              <div className="trending__data-content" key={el.id}>
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

        <div className="main__content">
          <div className="title">В тренде - Манга</div>
          <Link className="links" to={"/manga"}>
            Показать
            <span className="arrow-right">
              <VscArrowRight></VscArrowRight>
            </span>
          </Link>
          <div className="trending-data">
            {mangaData.map((el, i) => (
              <div className="trending__data-content" key={el.id}>
                <img
                  alt="#"
                  src={"https://shikimori.one" + el.image.original}
                  className="trending-img"
                />
                <span className="trending-text">{el.russian}</span>
              </div>
            ))}
          </div>
          {/* <p>В разработке...</p> */}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
