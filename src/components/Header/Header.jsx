import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <SiShikimori className="head__shiki__logo"></SiShikimori>
        <div className="head__title__text">Shikimori clone</div>
        <button className="head__adaptive__btn" onClick={() => menuActive}>
          <span></span>
        </button>
        <MobileMenu
          openMenu={menuActive}
          changeMenu={setMenuActive}
        ></MobileMenu>
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
};

export default Header;
