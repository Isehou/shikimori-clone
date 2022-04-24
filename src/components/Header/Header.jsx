import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="head_logo">Shikimori clone</div>
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

        <div className="head_login"></div>
      </ul>
    </div>
  );
};

export default Header;
