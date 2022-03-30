import React from "react";
import "../style/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="head_logo">Space Consulting</div>
      <ul className="head_list">
        {props.links.map((el, i) => {
          return (
            <li onClick={() => props.changeLink(el.link)} key={i}>
              {el.label}
            </li>
          );
        })}

        <div className="head_login"></div>
      </ul>
    </div>
  );
};

export default Header;
