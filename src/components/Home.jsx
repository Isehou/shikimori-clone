import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://shikimori.org/api/mangas?limit=25&page=${page}`)
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [page]);
  return (
    <div className="home_page">
      <h2>Ours Home Page</h2>
      <button
        className="btn"
        onClick={() => setPage((curr) => (curr === 1 ? 1 : curr - 1))}
      >
        Prev
      </button>
      <button className="btn" onClick={() => setPage((curr) => curr + 1)}>
        Next
      </button>
      <div className="el_list">
        {list.map((el, i) => {
          return <span>{el.name}</span>;
        })}
      </div>
    </div>
  );
}

export default Home;
