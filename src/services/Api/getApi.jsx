import Home from "../../components/Home/Home";
import { useEffect } from "react";

function getApiData(props) {
  props.useEffect(() => {
    fetch(
      `https://shikimori.one/api/animes?genre=5&r_plus&limit=30&page=${props.page}`
    )
      .then((res) => res.json())
      .then((res) => props.setList(res));
  }, [props.page]);
}

export default getApiData;
