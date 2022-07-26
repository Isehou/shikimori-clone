import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

function FilterFunction() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://shikimori.one/api/genres?limit=20")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        console.log(res);
      });
  });

  return (
    <div className="filter">
      <div className="filter__block">
        <ul className="filter__items">
          <div className="filter__item-genre">ЖАНРЫ</div>
          {items.map((el, i) => (
            <li className="filter__item" key={el.id}>
              <input type="checkbox" />
              <span>{el.russian}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterFunction;
