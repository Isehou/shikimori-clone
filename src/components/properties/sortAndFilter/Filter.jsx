import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilters } from "../../../store/slices/filterSlice.tsx";
import "./filter-and-sort.css";

function Filter({ filterList, toggleFilter, kind }) {
  const dispatch = useDispatch();
  const itemsFromData = useSelector((state) => state.filter[kind]);
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return (
    <div className="filter">
      <div className="filter__block">
        <ul className="filter__items">
          <div className="filter__item-genre">ЖАНРЫ</div>
          {itemsFromData.map((el, i) => (
            <label key={el.id}>
              <li
                className={`filter__item ${
                  filterList[el.id] ? "selected" : ""
                }`}
              >
                <input type="checkbox" onChange={() => toggleFilter(el.id)} />
                <span>{el.russian}</span>
              </li>
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
