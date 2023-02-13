import React from "react";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import api from "../img/api.jpg";
import { color } from "@mui/system";

const AboutPage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-2rem)" },
    to: { opacity: 1, transform: "translateY(2rem)" },
    config: { duration: 500 },
  });

  return (
    <div
      className="pages"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="wrapper" style={{ width: "1200px" }}>
        <animated.div style={props}>
          <div className="about-page">
            <div className="photo-block">
              <img className="photo-block_img" src={api} alt="#" />
              <a href="https://www.linkedin.com/in/isan-matenov-20a073248/">
                Мой профиль в Linkedin
              </a>
            </div>
            <div className="text-block">
              <h2>О сайте</h2>
              <p>
                Проект является аналогом сайта -
                <a
                  href="https://shikimori.one/"
                  target="_blank"
                  style={{ cursor: "pointer", color: "red" }}
                >
                  https://shikimori.one/
                </a>
                , разрабатывалась исключительно для учебных целей и развития
                скилла кодить и верстать. Большую часть логики проекта в
                основном занимают запросы данных с api, - это получение,
                фильтрация, сортировка данных и соответственно последующее их
                отображение у пользователя. Верстал для полноразмерных экранов,
                но есть и немного адаптива с использованием медиа-запросов.
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};
export default AboutPage;
