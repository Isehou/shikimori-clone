import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiShikimori } from "react-icons/si";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import styled from "styled-components";

import "./header.css";
import { height } from "@mui/system";

function Header(props) {
  const [isOpen, setIsOpen] = useState();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="head">
      <div className="container">
        <Link className="title-logo__link" to="/">
          <SiShikimori className="head-shiki__logo"></SiShikimori>
          <div className="head-title__text">Shikimori clone</div>
        </Link>
        <button
          className={`head-adaptive__btn ${isOpen && "active"}}`}
          onClick={handleClick}
        >
          <span></span>
        </button>
        <div className={`head-menu ${isOpen && "active"}`}>
          <ul className="head-list" onClick={handleClick}>
            {props.links.map((el, i) => {
              return (
                <li key={i}>
                  <Link className="head-link" to={el.link}>
                    {el.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="theme-switch" onClick={toggleTheme}>
          {theme === "light" ? (
            <HiMoon
              style={{
                height: "20px",
                width: "20px",
                color: "white",
              }}
            />
          ) : (
            <HiOutlineMoon
              style={{
                height: "20px",
                width: "20px",
                color: "white",
              }}
            />
          )}
          {theme} Theme
        </div>
      </div>
    </div>
  );
}

export default Header;
