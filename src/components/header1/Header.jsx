import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";
import { useState } from "react";

function Header(props) {
  const [isOpen, setIsOpen] = useState();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="head">
      <div className="container">
        <Link className="title__logo__link" to="/">
          <SiShikimori className="head-shiki__logo"></SiShikimori>
          <div className="head-title__text">Shikimori clone</div>
        </Link>
        <button
          className={`head-adaptive__btn ${isOpen && "active"}}`}
          onClick={handleClick}
        >
          <span></span>
        </button>
        <div className={`head__menu ${isOpen && "active"}`}>
          <ul className="head__list" onClick={handleClick}>
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
