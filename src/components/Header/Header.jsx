import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";
import HandleClick from "./HandleClick";

function Header(props) {
  return (
    <div className="header">
      <div className="container" id="container">
        <SiShikimori className="head__shiki__logo"></SiShikimori>
        <div className="head__title__text">Shikimori clone</div>
        <button
          className="head__adaptive__btn"
          id="head__adaptive__btn"
          onClick={HandleClick}
        >
          <span></span>
        </button>
        <div className="head__menu" id="head__menu">
          <ul className="head__list" onClick={HandleClick}>
            {props.links.map((el, i) => {
              return (
                <li key={i}>
                  <Link className="head__link" to={el.link}>
                    {el.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
