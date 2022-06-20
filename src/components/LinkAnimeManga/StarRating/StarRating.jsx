import { useState, useEffect } from "react";
import "./style.css";

function StarRating({rating}) {
  const [score, setScore] = useState();
  useEffect(() => {
    setScore((rating))
  },[rating]); 
  return (
    <div className="rating">
      <div className="rating__body">
        <div className="rating__active" style={{width: `${score}%` }}></div>
        <div className="rating__items">
          <input
            type="radio"
            className="rating__item"
            name="rating"
            value="1"
          />
          <input
            type="radio"
            className="rating__item"
            name="rating"
            value="2"
          />
          <input
            type="radio"
            className="rating__item"
            name="rating"
            value="3"
          />
          <input
            type="radio"
            className="rating__item"
            name="rating"
            value="4"
          />
          <input
            type="radio"
            className="rating__item"
            name="rating"
            value="5"
          />
        </div>
      </div>
      <div className="rating__value">{score}</div>
    </div>
  );
}

export default StarRating;
