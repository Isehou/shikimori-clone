import React, { useState, useEffect } from "react";
import "./Animes.css"
import Home from "../Home/Home";

function Animes(props) {
    const [AnimesList, setAnimesList] = useState();
    return (
        <div>
            Animes: {<Home />}
        </div>
    )
}

export default Animes