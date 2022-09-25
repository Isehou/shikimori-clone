import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilters } from "../slices/filterSlice";
import "./Filter.css";

const FilterItems = (filterList, toggleFilter) => {
  const dispatch = useDispatch();
  const itemsFromData = useSelector((state) => state.filter.filter);
  useEffect(() => {
    dispatch(fetchFilters());
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
            >
              <input type="checkbox" onClick={() => toggleFilter(el.id)} />
              <span>{el.russian}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterItems;
