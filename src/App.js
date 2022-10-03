import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import AnimePages from "./pages/AnimePages";
import { Routes, Route } from "react-router-dom";
import AnimeTab from "./components/LinkAnimeManga/AnimeTab";
import MangaTab from "./components/LinkAnimeManga/MangaTab";
import MangaPages from "./pages/MangaPages";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";

function App() {
  const [counter] = useState(0);
  const links = [
    { label: "Home", link: "/" },
    { label: "Anime", link: "/anime" },
    { label: "Manga", link: "/manga" },
    { label: "About Site", link: "/about" },
  ];

  return (
    <div className="main-container">
      <Header links={links} />
      <Routes>
        <Route path="/" element={<MainPage counter={counter} />} />
        <Route path="/anime" element={<AnimePages />}></Route>
        <Route path="/manga" element={<MangaPages />}></Route>
        <Route path="/manga/:id" element={<MangaTab />}></Route>
        <Route path="/anime/:id" element={<AnimeTab />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
