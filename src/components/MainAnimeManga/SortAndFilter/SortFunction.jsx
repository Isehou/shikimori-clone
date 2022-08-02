import React from "react";
import { useState, useEffect } from "react";

function SortFunction({ filterList, toggleFilter }) {
  const [itemsFromData, setItemsFromData] = useState([]);
  useEffect(() => {
    fetch("https://shikimori.one/api/genres")
      .then((res) => res.json())
      .then((res) => setItemsFromData());
  }, []);

  return (
    <div className="sort">
      <div className="sort__item-genre"></div>
    </div>
  );
}

export default SortFunction;
