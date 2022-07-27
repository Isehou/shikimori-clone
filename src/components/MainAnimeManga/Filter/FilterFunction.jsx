import React from "react";
import { useState, useEffect } from "react";
import "./FilterFunction.css";

function FilterFunction() {
  const [itemsFromData, setItemsFromData] = useState([]);
  const [getFiltering, setGetFiltering] = useState();
  useEffect(() => {
    fetch("https://shikimori.one/api/genres")
      .then((res) => res.json())
      .then((res) => {
        setItemsFromData(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="filter">
      <div className="filter__block">
        <ul className="filter__items">
          <div className="filter__item-genre">ЖАНРЫ</div>
          {itemsFromData.map((el, i) => (
            <li className="filter__item" key={el.id}>
              <input
                type="checkbox"
                onClick={() => setGetFiltering(console.log("click"))}
              />
              <span>{el.russian}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterFunction;
