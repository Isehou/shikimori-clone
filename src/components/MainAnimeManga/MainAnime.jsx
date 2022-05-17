import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modale/Modal";
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
  useEffect(() => {
    fetch(
      `https://shikimori.one/api/animes?genre=7&r_plus&limit=30&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [page]);
  return (
    <div className="home_page">
      <button
        className="btn"
        onClick={() => setPage((curr) => (curr === 1 ? 1 : curr - 1))}
      >
        Prev
      </button>
      <button className="btn" onClick={() => setPage((curr) => curr + 1)}>
        Next
      </button>
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
              <p>Выпущен: {curr.aired_on}</p>
              <p>Эпизоды: {curr.episodes}</p>
              <p>: {curr.genres}</p>
              <p>: {curr.duration}</p>
              <p>Статус: {curr.status}</p>
              <p className="modal_content_text-rating">Рейтинг: {curr.score}</p>
            </div>
            <Link to={"/anime/" + curr.id}>
              <button className="btn_modal_more_details">
                View Full Details
              </button>
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
                More Information
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainAnime;
