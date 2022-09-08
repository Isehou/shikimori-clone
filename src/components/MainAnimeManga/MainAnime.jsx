import React from "react";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal/Modal";
import Filter from "./SortAndFilter/Filter";
import Sort from "./SortAndFilter/Sort";
import "./style.css";
import "./LoaderWindow.css";
import AnimeItems from "../../store/components/AnimeItems";

function MainAnime(props) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [curr, setCurr] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = (state, element) => {
    setModalOpen(state);
    setCurr(element);
  };
  const [isLoading, setIsLoading] = useState(false);
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
  useEffect(() => {
    const filterString = Object.keys(filterList).filter(
      (key) => filterList[key]
    );
    setIsLoading(true);
    fetch(
      `https://shikimori.one/api/animes?&limit=30&page=${page}&genre=${filterString.join()}&order=${sortType}`
    )
      .then((res) => {
        console.log(res.status, res.ok);
        if (res.status === 200 && res.ok) return res.json();
      })
      .then((res) => {
        setList(res);
        setIsLoading(false);
      });
  }, [filterList, page, sortType]);
  return (
    <div className="home_page">
      {isLoading && <div className="loader"></div>}
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
                <AnimeItems>
                  {/* <img
                    alt="#"
                    src={"https://shikimori.one" + el.image.original}
                    className="block_image"
                  />
                  <span className="block_text">{el.russian}</span> */}
                  <button
                    className="open_modal_btn"
                    onClick={() => openModal(true, el)}
                  >
                    Подробнее
                  </button>
                </AnimeItems>
              </div>
            );
          })}
        </div>
      </div>
      <div className="filters">
        <Sort sortValue={sortType} onChangeSort={setSortType}></Sort>
        <Filter filterList={filterList} toggleFilter={toggleFilter}></Filter>
      </div>
    </div>
  );
}

export default MainAnime;
