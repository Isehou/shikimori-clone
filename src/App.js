import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import AnimePages from "./pages/AnimePages";
import UseEffectTest from "./pages/somePageTest/UseEffectTest";
import { Routes, Route } from "react-router-dom";
import AnimeTab from "./components/LinkAnimeManga/AnimeTab";
import MangaTab from "./components/LinkAnimeManga/MangaTab";
import MangaPages from "./pages/MangaPages";
import Example from "./pages/somePageTest/DeviceTest";
import MainPage from "./pages/MainPage";

function App() {
  const [counter] = useState(0);
  const links = [
    { label: "Home", link: "/" },
    { label: "Anime", link: "/anime" },
    { label: "Manga", link: "/manga" },
    { label: "Placeholder", link: "/resource" },
    { label: "Temp", link: "/device" },
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
        <Route path="/resource" element={<UseEffectTest />}></Route>
        <Route path="/device" element={<Example />}></Route>
      </Routes>
    </div>
  );
}

export default App;
