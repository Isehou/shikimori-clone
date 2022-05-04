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
        <Modal
          isOpen={isModalOpen}
          changeModalVisible={setModalOpen}
          className="modal_content"
        >
          <div className="modal_content_text">
            <h4>
              {curr ? curr.name : ""} / {curr ? curr.russian : ""}
            </h4>
          </div>
          <div className="modal_content_text">
            <p>Type: {curr ? curr.kind : ""}</p>
            <p>Rating: {curr ? curr.score : ""}</p>
            <p>Aired on: {curr ? curr.aired_on : ""}</p>
            <p>Episode: {curr ? curr.episodes : ""}</p>
            <p>Status: {curr ? curr.status : ""}</p>
          </div>

          <Link to={"/animes/" + (curr ? curr.id : "")}>
            <button className="btn_modal_more_details">
              View Full Details
            </button>
          </Link>
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
