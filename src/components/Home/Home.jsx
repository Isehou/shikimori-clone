import React from "react";
import { useEffect, useState } from "react";
import Modal from "../Modale/Modal";
import "./Home.css";

function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    fetch(
      `https://shikimori.org/api/animes?genre=5&r_plus&limit=30&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [page]);
  return (
    <div className="home_page">
      <h2>Home Page</h2>
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
        {list.map((el, i) => {
          return (
            <div className="element_content">
              <Modal isOpen={isModalOpen} changeModalVisible={setModalOpen}>
                <p className="modal_content">Lorem ipsum, dolor sit.</p>
              </Modal>

              <span>{el.name}</span>
              <img
                alt="#"
                src={"https://shikimori.org" + el.image.original}
                className="element_image"
              />
              <button className="open_modal" onClick={() => setModalOpen(true)}>
                Open Modal
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
