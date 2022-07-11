import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";
import { useState } from "react";

function Header(props) {
  const [isOpen, setIsOpen] = useState();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <div className="container">
        <Link to="/"><SiShikimori className="head__shiki-logo"></SiShikimori></Link>
        <div className="head__title-text">Shikimori clone</div>
        <button
          className="head__adaptive__btn"
          id="head__adaptive__btn"
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
