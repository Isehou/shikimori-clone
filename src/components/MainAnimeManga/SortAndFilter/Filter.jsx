import React from "react";
import { useState, useEffect } from "react";
import "./Filter__Sort.css";
import { useSelector } from "react-redux";

function Filter({ filterList, toggleFilter }) {
  // const [itemsFromData, setItemsFromData] = useState([]);
  const itemsFromData = useSelector((state) => state.filter);
  console.log(itemsFromData);

  const setItemsFromData = () => {};

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
          {/* {itemsFromData.map((el, i) => (
            <li
              className={`filter__item ${filterList[el.id] ? "active" : ""}`}
              key={el.id}
            >
              <input type="checkbox" onClick={() => toggleFilter(el.id)} />
              <span>{el.russian}</span>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
