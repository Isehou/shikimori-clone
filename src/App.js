import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import AnimeTab from "./components/link-page/AnimeTab";
import MangaTab from "./components/link-page/MangaTab";
import AnimePages from "./pages/AnimePage";
import MangaPages from "./pages/MangaPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/properties/ScrollToTop";

function App() {
  const [counter] = useState(0);
  const links = [
    { label: "Главная", link: "/" },
    { label: "Аниме", link: "/anime" },
    { label: "Манга", link: "/manga" },
    { label: "О сайте", link: "/about" },
  ];

  return (
    <div className="main-container">
      <ScrollToTop />
      <Header links={links} />
      <Routes>
        <Route path="/" element={<HomePage counter={counter} />} />
        <Route path="/anime" element={<AnimePages />}></Route>
        <Route path="/manga" element={<MangaPages />}></Route>
        <Route path="/manga/:id" element={<MangaTab />}></Route>
        <Route path="/anime/:id" element={<AnimeTab />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
