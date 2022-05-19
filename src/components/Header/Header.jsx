import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";

const Header = (props) => {
  return (
    <div className="header">
      <div className="head_main-text">
        <SiShikimori className="head_shiki_logo"></SiShikimori>
        Shikimori clone
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
  );
};

export default Header;
