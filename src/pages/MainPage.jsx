import React from "react";
import { animeSelector } from "../store/slices/animeSlice";
import { useSelector } from "react-redux";
import "./pagesStyle.css";
import "./mainPage.css";
import "../components/PageProperties/LoaderWindow.css";
import { Link } from "react-router-dom";
import animeBg from "../Img/berserk-anime-c1.jpg";
import mangaBg from "../Img/berserk-anime-c2.jpg";

const MainPage = () => {
  const { loading } = useSelector(animeSelector);
  return (
    <div className="home-page">
      {loading && <div className="loader"></div>}
      <div className="main-page">
        <div className="main-page__content">
          <Link className="main-page__links" to={"/anime"}>
            <p className="title-name">Anime</p>
            <img className="image" src={animeBg} alt="#" />
          </Link>
        </div>
        <div className="main-page__content">
          <Link className="main-page__links" to={"/manga"}>
            <p className="title-name">Manga</p>
            <img className="image" src={mangaBg} alt="#" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
