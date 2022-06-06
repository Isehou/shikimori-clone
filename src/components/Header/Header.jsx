import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";

const HandleClick = (e) => {
  let openHamb = document.querySelectorAll("head__adaptive__btn");
  let headMenu = document.querySelectorAll("head__menu");
  for (let i = 0; i < openHamb.length; i++) {
    openHamb[i].classList.remove("_active");
  }
  e.currentTarget.classList.add("_active");
};

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <SiShikimori className="head__shiki__logo"></SiShikimori>
        <div className="head__title__text">Shikimori clone</div>
        <button
          className="head__adaptive__btn"
          id="hamb__btn"
          onClick={HandleClick}
        >
          <span></span>
        </button>
        <div className="head__menu">
          <ul className="head__list">
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
