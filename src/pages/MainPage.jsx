import React from "react";
import { useEffect, useState } from "react";
import { animeSelector, fetchAnimes } from "../store/slices/animeSlice";
import { useSelector } from "react-redux";
import "./pageStyle.css";
import "../components/PageProperties/LoaderWindow.css";

const MainPage = () => {
  const { animes, loading, hasErrors } = useSelector(animeSelector);
  return (
    <div className="home_page">
      {loading && <div className="loader"></div>}
      <div className="wrapper">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
