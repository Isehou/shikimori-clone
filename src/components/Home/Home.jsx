import React from "react";
import { useEffect, useState } from "react";
import Animes from "../Animes/Animes";
import Modal from "../Modale/Modal";
import "./Home.css";

function Home(props) {
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
        <Modal
          isOpen={isModalOpen}
          changeModalVisible={setModalOpen}
          className="modal_content"
        >
          <div className="modal_content_text">{curr ? curr.name : ""}</div>
          <div className="modal_content_text">{curr ? curr.russian : ""}</div>
          <div className="modal_content_text">{curr ? curr.kind : ""}</div>
          <div className="modal_content_text">{curr ? curr.score : ""}</div>
          <div className="modal_content_text">{curr ? curr.aired_on : ""}</div>
          <div className="modal_content_text">{curr ? curr.episodes : ""}</div>
          <div className="modal_content_text">{curr ? curr.status : ""}</div>
        </Modal>
        {list.map((el, i) => {
          return (
            <div className="block_content" key={el.id}>
              <span className="block_text">{el.russian}</span>
              <img
                alt="#"
                src={"https://shikimori.one" + el.image.original}
                className="block_image"
              />
              <button
                className="open_modal"
                onClick={() => openModal(true, el)}
              >
                More Info
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
