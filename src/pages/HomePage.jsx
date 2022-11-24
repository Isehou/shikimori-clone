import React from "react";
import { animeSelector } from "../store/slices/animeSlice";
import { useSelector } from "react-redux";
import "./pagestyle.css";
import "./homepage.css";
import "../components/PageProperties/LoaderWindow.css";
import { Link } from "react-router-dom";
import fatebg from "../Img/725584.png";
import { VscArrowRight } from "react-icons/vsc";
import MangaItems from "./../store/components/MangaItems";
import { useState } from "react";

const MainPage = ({ manga, openModal }) => {
  const { loading } = useSelector(animeSelector);
  return (
    <div className="homepage">
      {loading && <div className="loader"></div>}
      <div className="homepage__main">
        <div className="main__bg">
          <p className="main-title-name">Shikimori Clone</p>
          <img className="image" src={fatebg} alt="#" />
        </div>
        <div className="main__content">
          Trending anime
          <Link className="links" to={"/anime"}>
            View all
            <span className="arrow-right">
              <VscArrowRight></VscArrowRight>
            </span>
          </Link>
        </div>
        <div className="main__content">
          Trending manga
          <MangaItems></MangaItems>
          <Link className="links" to={"/manga"}>
            View all
            <span className="arrow-right">
              <VscArrowRight></VscArrowRight>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
