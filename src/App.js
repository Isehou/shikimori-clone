import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import MainAnime from './components/MainAnimeManga/MainAnime';
import UseStateTest from './components/someData/UsestateTest';
import UseEffectTest from './components/someData/UseEffectTest';
import { Routes,  Route, Link, } from "react-router-dom";
import Animes from './components/LinkAnimeManga/Animes';
import Mangas from './components/LinkAnimeManga/Mangas';


function App() {
  const [counter, setCounter] = useState(0)
  const links = [{ label: "Anime", link: "/" }, 
                  { label: "Manga", link: "/manga" }, 
                  { label: "Value", link: "/state" }, 
                  { label: "TestAPi", link: "/resource" }]
  return (
    <div className='main'>
      <Header links={links} />
        <Routes>
          <Route path="/" element={ <MainAnime counter={counter} />} />
            <Route path="/animes/:id" element={ <Animes />}></Route>
            <Route path="/manga/:id" element={ <Mangas />}></Route>
            <Route path="/state" element={ <UseStateTest counter={counter} setCounter={setCounter} />}></Route>
            <Route path="/resource" element={ <UseEffectTest /> }></Route>
        </Routes>
    </div>
  );
}

export default App;
