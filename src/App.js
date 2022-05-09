import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import MainAnime from './components/MainAnimeManga/MainAnime';
import UseEffectTest from './components/someData/UseEffectTest';
import { Routes,  Route, Link, } from "react-router-dom";
import Anime from './components/LinkAnimeManga/Anime';
import Manga from './components/LinkAnimeManga/Manga';
import MainManga from './components/MainAnimeManga/MainManga';


function App() {
  const [counter, setCounter] = useState(0)
  const links = [{ label: "Anime", link: "/" }, 
                  { label: "Manga", link: "/manga" }, 
                  { label: "TestAPi", link: "/resource" }]
  return (
    <div className='main'>
      <Header links={links} />
        <Routes>
          <Route path="/" element={ <MainAnime counter={counter} />} />
            <Route path="/manga" element={ <MainManga />}></Route>
            <Route path="/manga/:id" element={ <Manga />}></Route>
            <Route path="/anime/:id" element={ <Anime />}></Route>
            <Route path="/resource" element={ <UseEffectTest /> }></Route>
        </Routes>
    </div>
  );
}

export default App;
