import React from "react";
import { useState, useEffect } from "react";
import "./Filter__Sort.css";

function Filter({ filterList, toggleFilter }) {
  const [itemsFromData, setItemsFromData] = useState([]);
  useEffect(() => {
    fetch("https://shikimori.one/api/genres")
      .then((res) => res.json())
      .then((res) => setItemsFromData(res.filter((e) => e.kind === "anime")));
  }, []);

  return (
    <div className="filter">
      <div className="filter__block">
        <ul className="filter__items">
          <div className="filter__item-genre">ЖАНРЫ</div>
          {itemsFromData.map((el, i) => (
            <li
              className={`filter__item ${filterList[el.id] ? "active" : ""}`}
              key={el.id}
              onClick={() => toggleFilter(el.id)}
            >
              <input
                className={`chkbox ${filterList[el.id] ? "selected" : ""}`}
                type="checkbox"
                autoComplete="off"
              />
              {el.russian}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
