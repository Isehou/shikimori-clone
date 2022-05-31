import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <SiShikimori className="head_shiki_logo"></SiShikimori>
        <div className="head_title-text">
          Shikimori clone
        </div>
        <div className="header_other">
          <span></span>
        </div>
        <ul className="head_list">
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
