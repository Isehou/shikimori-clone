import "./Filter__Sort.css";
import { React, useEffect, useState } from "react";

export default function Sort({ value }) {
  const [sortItems, setSortItems] = useState();
  console.log(value);
  return (
    <div className="sort">
      <div className="sort__block">
        <div className="sort__items">
          <div className="sort__item-genre">СОРТИРОВКА</div>
          <div className="sort__item"></div>
        </div>
      </div>
    </div>
  );
}
