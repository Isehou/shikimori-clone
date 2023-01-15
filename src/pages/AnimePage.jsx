import React from "react";
import { useEffect, useState } from "react";
import Filter from "../components/properties/sortAndFilter/Filter";
import Sort from "../components/properties/sortAndFilter/Sort";
import { Link } from "react-router-dom";
import Modal from "../components/properties/Modal";
import "./page-style.css";
import "../components/properties/loader-window.css";
import AnimeItems from "../components/items/AnimeItems";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { animeSelector, fetchAnimes } from "../store/slices/animeSlice";
import HomePage from "./HomePage";

const AnimePages = ({ props }) => {
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (state, element) => {
    setModalOpen(state);
    setCurr(element);
  };
  const [sortType, setSortType] = useState("");
  const [filterList, setFilterList] = useState({});
  const toggleFilter = (id) => {
    setFilterList((prev) => {
      if (prev.hasOwnProperty(id)) {
        return { ...prev, [id]: !prev[id] };
      }
      return { ...prev, [id]: true };
    });
  };

  const { animes, loading } = useSelector(animeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterString = Object.keys(filterList).filter(
      (key) => filterList[key]
    );

    dispatch(fetchAnimes({ page, filter: filterString, sortType }));
  }, [dispatch, filterList, page, sortType]);

  return (
    <div className="pages">
      {loading && <div className="loader"></div>}
      <div className="wrapper">
        <div className="button-block">
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
        {curr && (
          <Modal
            isOpen={isModalOpen}
            changeModalVisible={setModalOpen}
            className="modal-content"
          >
            <h4 className="modal-content_text">
              {curr.russian} / {curr.name}
            </h4>
            <div className="modal-content_text-all">
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
            <div className="modal-content_text-rating">
              Рейтинг: {curr.score}
            </div>
            <Link to={"/anime/" + curr.id}>
              <button className="btn_modal_more_details">Посмотреть</button>
            </Link>
          </Modal>
        )}
        <AnimeItems
          openModal={openModal}
          animes={animes}
          className="block_content"
        ></AnimeItems>
      </div>
      <div className="filters">
        <Sort sortValue={sortType} onChangeSort={setSortType}></Sort>
        <Filter
          kind={"anime"}
          filterList={filterList}
          toggleFilter={toggleFilter}
        ></Filter>
      </div>
    </div>
  );
};

export default AnimePages;
