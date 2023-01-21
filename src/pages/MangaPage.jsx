import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/properties/Modal";
import Filter from "../components/properties/sortAndFilter/Filter";
import Sort from "../components/properties/sortAndFilter/Sort";
import "./page-style.css";
import "../components/properties/loader-window.css";
import MangaItems from "../components/items/MangaItems";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { mangaSelector, fetchManga } from "../store/slices/mangaSlice.tsx";

const MangaPages = ({ props, filter }) => {
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (state, element) => {
    setModalOpen(state);
    setCurr(element);
    console.log("openmodal");
  };
  const [sortType, setSortType] = useState("");
  const [filterList, setFilterList] = useState({});
  const toggleFilter = (id) => {
    console.log("togglefilter");
    setFilterList((prev) => {
      if (prev.hasOwnProperty(id)) {
        return { ...prev, [id]: !prev[id] };
      }
      return { ...prev, [id]: true };
    });
  };
  const { manga, loading } = useSelector(mangaSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const filterString = Object.keys(filterList).filter(
      (key) => filterList[key]
    );
    dispatch(fetchManga({ page, filter: filterString, sortType }));
  }, [dispatch, filterList, page, sortType]);

  return (
    <div className="pages">
      {loading && <div className="lds-hourglass"></div>}
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
                Количество глав:{" "}
                {curr.chapters >= null ? curr.chapters : "Неизвестно"}
              </p>
              <p>Статус: {curr.status}</p>
              <p>Дата релиза: {curr.released_on}</p>
              <p>Начало показа: {curr.aired_on}</p>
            </div>
            <div className="modal-content_text-rating">
              Рейтинг: {curr.score}
            </div>
            <Link to={"/manga/" + curr.id}>
              <button className="btn_modal_more_details">Посмотреть</button>
            </Link>
          </Modal>
        )}{" "}
        <MangaItems
          manga={manga}
          openModal={openModal}
          className="block_content"
        ></MangaItems>
      </div>
      <div>
        <Sort sortValue={sortType} onChangeSort={setSortType}></Sort>
        <Filter
          kind={"manga"}
          filterList={filterList}
          toggleFilter={toggleFilter}
        ></Filter>
      </div>
    </div>
  );
};
export default MangaPages;
