import React, { useState } from "react";
import "./style.css";

const FilterItems = () => {
  const [itemsFromData, setItemsFromData] = useState([]);
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
};

export default FilterItems;
