import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import Filter from "./SortAndFilter/Filter";
import Sort from "./SortAndFilter/Sort";
import "./style.css";

function MainAnime(props) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (state, element) => {
    setModalOpen(state);
    setCurr(element);
  };
  const [sortBy, setSortBy] = useState("id");
  const sortTypes = ["id", "popularity", "name", "random"];
  const sortNames = {
    id: "По ID",
    popularity: "По популярности",
    name: "По алфавиту",
    random: "Случайно",
  };
  const [filterList, setFilterList] = useState({});
  const toggleFilter = (id) => {
    setFilterList((prev) => {
      if (prev.hasOwnProperty(id)) {
        return { ...prev, [id]: !prev[id] };
      }
      return { ...prev, [id]: true };
    });
  };
  const filterString = Object.keys(filterList).filter((key) => filterList[key]);

  useEffect(() => {
    fetch(
      `https://shikimori.one/api/animes?&order=popularity&limit=30&page=${page}&genre=${filterString.join()}`
    )
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [filterString, page]);

  return (
    <div className="home_page">
      <div className="wrapper">
        <div className="button__block">
          <button
            className="btn"
            onClick={() => setPage((curr) => (curr === 1 ? 1 : curr - 1))}
          >
            Пред
          </button>
          <button className="btn" onClick={() => setPage((curr) => curr + 1)}>
            След
          </button>
        </div>
        <div className="element_list">
          {curr && (
            <Modal
              isOpen={isModalOpen}
              changeModalVisible={setModalOpen}
              className="modal_content"
            >
              <h4 className="modal_content_text">
                {curr.russian} / {curr.name}
              </h4>
              <div className="modal_content_text-all">
                <p>Тип: {curr.kind}</p>
                <p>
                  Количество серий:{" "}
                  {curr.episodes >= null ? curr.episodes : "Неизвестно"}
                </p>
                <p>Статус: {curr.status}</p>
                <p>
                  Дата релиза:{" "}
                  {curr.released_on >= null ? "Неизвестно" : curr.released_on}
                </p>
                <p>
                  Начало показа:{" "}
                  {curr.aired_on >= null ? "Неизвестно" : curr.aired_on}
                </p>
              </div>
              <div className="modal_content_text-rating">
                Рейтинг: {curr.score}
              </div>
              <Link to={"/anime/" + curr.id}>
                <button className="btn_modal_more_details">Посмотреть</button>
              </Link>
            </Modal>
          )}
          {list.map((el, i) => {
            return (
              <div className="block_content" key={el.id}>
                <img
                  alt="#"
                  src={"https://shikimori.one" + el.image.original}
                  className="block_image"
                />
                <span className="block_text">{el.russian}</span>
                <button
                  className="open_modal_btn"
                  onClick={() => openModal(true, el)}
                >
                  Подробнее
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Filter filterList={filterList} toggleFilter={toggleFilter}></Filter>
      <Sort value={sortBy}></Sort>
    </div>
  );
}

export default MainAnime;
