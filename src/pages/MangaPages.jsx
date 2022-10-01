import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/PageProperties/Modal";
import Filter from "../components/PageProperties/SortAndFilter/Filter";
import Sort from "../components/PageProperties/SortAndFilter/Sort";
import "./pageStyle.css";
import "../components/PageProperties/LoaderWindow.css";
import MangaItems from "../store/components/MangaItems";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { mangaSelector, fetchManga } from "../store/slices/mangaSlice";

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
  const { manga, loading, hasErrors } = useSelector(mangaSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const filterString = Object.keys(filterList).filter(
      (key) => filterList[key]
    );
    dispatch(fetchManga({ page, filter: filterString, sortType }));
  }, [dispatch, filterList, page, sortType]);

  return (
    <div className="home_page">
      {loading && <div className="lds-hourglass"></div>}
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
                Количество глав:{" "}
                {curr.chapters >= null ? curr.chapters : "Неизвестно"}
              </p>
              <p>Статус: {curr.status}</p>
              <p>Дата релиза: {curr.released_on}</p>
              <p>Начало показа: {curr.aired_on}</p>
            </div>
            <div className="modal_content_text-rating">
              Рейтинг: {curr.score}
            </div>
            <Link to={"/manga/" + curr.id}>
              <button className="btn_modal_more_details">Посмотреть</button>
            </Link>
          </Modal>
        )}{" "}
        <MangaItems manga={manga} className="block_content">
          <button className="open_modal_btn" onClick={() => openModal(true)}>
            Подробнее
          </button>
        </MangaItems>
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
