import React from "react";
import { useState, useEffect } from "react";

function FilterFunction() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(
      `https://shikimori.one/api/genres${data}`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, );
  return <div className="filter"></div>;
}
export default FilterFunction;
