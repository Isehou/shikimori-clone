import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Mangas(props) {
  const [manga, setManga] = useState();
  let params = useParams();
  useEffect(() => {
    fetch(`https://shikimori.one/api/mangas/${params.id}`)
      .then((res) => res.json())
      .then((res) => setManga(res));
  }, [params]);
  return (
    <div className="mangas-main">
      <div className="mangas-main_details">
        <p></p>
        <pre>{JSON.stringify(params, null, 5)}</pre>
      </div>
    </div>
  );
}

export default Mangas;
