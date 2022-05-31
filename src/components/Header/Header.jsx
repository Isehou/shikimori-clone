import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <SiShikimori className="head__shiki__logo"></SiShikimori>
        <div className="head__title__text">Shikimori clone</div>
        <div className="head__subitle__other">
          <span></span>
        </div>
        <ul className="head__list">
          {props.links.map((el, i) => {
            return (
              <li key={i}>
                <Link className="header_link" to={el.link}>
                  {el.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
