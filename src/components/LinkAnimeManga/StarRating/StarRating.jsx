import "./style.css";
function StarRating() {
  return (
    <div className="rating">
      <div className="rating__body">
        <div className="rating__active"></div>
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
        <div className="rating__value">4</div>
      </div>
    </div>
  );
}
export default StarRating;
