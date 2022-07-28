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
  // const menuItems = [...new Set(itemsFromData.map((Val) => Val.category))];
  // const filterItem = (curcat) => {
  //   const newItem = itemsFromData.filter((newVal) => {
  //     return newVal.category === curcat;
  //     // comparing category for displaying data
  //   });
  //   setItemsFromData(newItem);
  // };

  return (
    <div className="filter">
      <div className="filter__block">
        <ul className="filter__items">
          <div className="filter__item-genre">ЖАНРЫ</div>
          {itemsFromData.map((el, i) => (
            <li
              className="filter__item"
              key={el.id}
              onClick={() => setItemsFromData(console.log("click"))}
            >
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
