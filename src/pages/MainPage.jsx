import React from "react";
import { animeSelector } from "../store/slices/animeSlice";
import { useSelector } from "react-redux";
import "./pageStyle.css";
import "../components/PageProperties/LoaderWindow.css";
import { Link } from "react-router-dom";
import image from "../Img/manga-background.jpg";

const MainPage = () => {
  const { loading } = useSelector(animeSelector);
  return (
    <div className="home-page">
      {loading && <div className="loader"></div>}
      <div className="main-page">
        {/* <img className="content__links__image" src={image} alt="#"></img> */}
        <div className="content__links">
          <Link to={"/anime"}>
            <button className="btn">anime</button>
          </Link>
        </div>
        <div className="content__links">
          <Link to={"/manga"}>
            <button className="btn">manga</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
