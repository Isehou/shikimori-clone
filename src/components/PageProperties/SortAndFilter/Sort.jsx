import "./FilterSort.css";
import { React, useEffect, useState } from "react";

function Sort({ sortValue, onChangeSort }) {
  const [sort, setSort] = useState([]);
  return (
    <div className="sort">
      <div className="sort__block">
        <ul className="sort__items">
          <div className="sort__item-genre">СОРТИРОВКА</div>
          <div className="sort__item">
            <label className="sort__item-chkbox">
              <input
                name="sortBy"
                defaultChecked={sortValue === "id"}
                value="id"
                type="radio"
                onChange={(e) => onChangeSort(e.target.value)}
              />
              <span>По ID</span>
            </label>
          </div>
          <div className="sort__item">
            <label className="sort__item-chkbox">
              <input
                name="sortBy"
                defaultChecked={sortValue === "popularity"}
                value="popularity"
                type="radio"
                onChange={(e) => onChangeSort(e.target.value)}
              />
              <span>По популярности</span>
            </label>
          </div>
          <div className="sort__item">
            <label className="sort__item-chkbox">
              <input
                name="sortBy"
                defaultChecked={sortValue === "name"}
                value="name"
                type="radio"
                onChange={(e) => onChangeSort(e.target.value)}
              />
              <span>По алфавиту</span>
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
