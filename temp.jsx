import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/PageFunctions/Modal";
import FilterItems from "../store/components/FilterItems";
import Sort from "../components/PageFunctions/SortAndFilter/Sort";
import "./pageStyle.css";
import "../components/PageFunctions/LoaderWindow.css";
import MangaItems from "../store/components/MangaItems";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { mangaSelector, fetchManga } from "../store/slices/mangaSlice";

function MainAnime({ props, filter }) {
  // delete after fix modal window
  const [list, setList] = useState([]);
  const [loading, setIsLoading] = useState();
  //
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

  // New version
  // const { manga, loading, hasErrors } = useSelector(mangaSelector);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const filterString = Object.keys(filterList).filter(
  //     (key) => filterList[key]
  //   );
  //   dispatch(fetchManga({ page, filter: filterString, sortType }));
  // }, [dispatch, filterList, page, sortType]);

  // Old version (delete after fix modal window)
  useEffect(() => {
    const filterString = Object.keys(filterList).filter(
      (key) => filterList[key]
    );
    setIsLoading(true);
    fetch(
      `https://shikimori.one/api/mangas?&limit=30&page=${page}&genre=${filterString.join()}&order=${sortType}`
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
  //
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
          )}

          {/* new version */}
          {/* <MangaItems manga={manga} className="block_content">
            <button className="open_modal_btn" onClick={() => openModal(true)}>
              Подробнее
            </button>
          </MangaItems> */}

          {/* delete after fix */}
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
          {/*  */}
        </div>
      </div>
      <div>
        <Sort sortValue={sortType} onChangeSort={setSortType}></Sort>
        <FilterItems
          filterList={filterList}
          toggleFilter={toggleFilter}
        ></FilterItems>
      </div>
    </div>
  );
}
export default MainAnime;
