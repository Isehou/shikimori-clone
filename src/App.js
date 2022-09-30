import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import MainAnime from "./pages/AnimePages";
import UseEffectTest from "./pages/somePageTest/UseEffectTest";
import { Routes, Route, Link } from "react-router-dom";
import AnimeTab from "./components/LinkAnimeManga/AnimeTab";
import MangaTab from "./components/LinkAnimeManga/MangaTab";
import MainManga from "./pages/MangaPages";
import Example from "./pages/somePageTest/DeviceTest";
import AboutPage from "./pages/AboutPage";

function App() {
  const [counter, setCounter] = useState(0);
  const links = [
    { label: "Anime", link: "/" },
    { label: "Manga", link: "/manga" },
    { label: "About Site", link: "/about" },
    { label: "Placeholder", link: "/resource" },
    // { label: "Temp", link: "/device" },
  ];

  return (
    <div className="main-container">
      <Header links={links} />
      <Routes>
        <Route path="/" element={<MainAnime counter={counter} />} />
        <Route path="/manga" element={<MainManga />}></Route>
        <Route path="/manga/:id" element={<MangaTab />}></Route>
        <Route path="/anime/:id" element={<AnimeTab />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/resource" element={<UseEffectTest />}></Route>
        {/* <Route path="/device" element={<Example />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
