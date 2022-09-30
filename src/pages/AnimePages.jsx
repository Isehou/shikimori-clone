import React from "react";
import { useEffect, useState } from "react";
import Filter from "../components/PageProperties/SortAndFilter/Filter";
import Sort from "../components/PageProperties/SortAndFilter/Sort";
import { Link } from "react-router-dom";
import Modal from "../components/PageProperties/Modal";
import "./pageStyle.css";
import "../components/PageProperties/LoaderWindow.css";
import AnimeItems from "../store/components/AnimeItems";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { animeSelector, fetchAnimes } from "../store/slices/animeSlice";

const AnimePages = ({ props }) => {
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (state, element) => {
    setModalOpen(state);
    setCurr(element);
    console.log("openModalFunc");
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

  const { animes, loading, hasErrors } = useSelector(animeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const filterString = Object.keys(filterList).filter(
      (key) => filterList[key]
    );

    dispatch(fetchAnimes({ page, filter: filterString, sortType }));
  }, [dispatch, filterList, page, sortType]);

  return (
    <div className="home-page">
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
        <Filter filterList={filterList} toggleFilter={toggleFilter}></Filter>
      </div>
    </div>
  );
};

export default AnimePages;
