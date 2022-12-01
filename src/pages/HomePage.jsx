import React, { useState, useEffect } from "react";
import "./pagestyle.css";
import "./homepage.css";
import "../components/Properties/LoaderWindow.css";
import { Link } from "react-router-dom";
import fatebg from "../Img/725584.png";
import sw from "../Img/sw-1.jpg";
import { VscArrowRight } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { animeSelector, fetchAnimes } from "../store/slices/animeSlice";
import AnimeItems from "../store/components/AnimeItems";
import { mangaSelector, fetchManga } from "../store/slices/mangaSlice";
import MangaItems from "../store/components/MangaItems";

const HomePage = () => {
  const { animes, manga, loading } = useSelector(animeSelector, mangaSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnimes());
  }, [dispatch]);
  console.log(animes);

  // const [data, setData] = useState();
  // useEffect(() => {
  //   return fetch(`https://shikimori.one/api/animes?&order=popularity&limit=10`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="homepage">
      {loading && <div className="loader"></div>}
      <div className="homepage__main">
        <div className="main__bg">
          <p className="main-title-name">Shikimori Clone</p>
          <img className="image" src={sw} alt="#" />
        </div>
        <div className="main__content">
          Trending anime
          <Link className="links" to={"/anime"}>
            View all
            <span className="arrow-right">
              <VscArrowRight></VscArrowRight>
            </span>
          </Link>
          <AnimeItems className="main__fetch-data" animes={animes}></AnimeItems>
          <p>В разработке...</p>
        </div>
        <div className="main__content">
          Trending manga
          <Link className="links" to={"/manga"}>
            View all
            <span className="arrow-right">
              <VscArrowRight></VscArrowRight>
            </span>
          </Link>
          <MangaItems manga={manga}></MangaItems>
          <p>В разработке...</p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
