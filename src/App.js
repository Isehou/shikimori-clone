import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import MainAnime from './components/MainAnimeManga/MainAnime';
import UseEffectTest from './components/someTest/UseEffectTest';
import { Routes,  Route, Link, } from "react-router-dom";
import AnimeTab from './components/LinkAnimeManga/AnimeTab';
import MangaTab from './components/LinkAnimeManga/MangaTab';
import MainManga from './components/MainAnimeManga/MainManga';
import Example from './components/someTest/DeviceTest';
import MyTestCode from './components/someTest/MyTestCode'


function App() {
  const [counter, setCounter] = useState(0)
  const links = [{ label: "Anime", link: "/" }, 
                  { label: "Manga", link: "/manga" }, 
                  { label: "Api-Test", link: "/resource" },
                  // { label: "MyTestCode", link: "/testcode" },
                  { label: "Device-Test", link: "/device" }]
                
                  
  return (
    <div className='main-container'>
      <Header links={links} />
        <Routes>
          <Route path="/" element={ <MainAnime counter={counter} />} />
            <Route path="/manga" element={ <MainManga />}></Route>
            <Route path="/manga/:id" element={ <MangaTab />}></Route>
            <Route path="/anime/:id" element={ <AnimeTab />}></Route>
            <Route path="/resource" element={ <UseEffectTest /> }></Route>
            {/* <Route path="/testcode" element={ <MyTestCode /> }></Route> */}
            <Route path="/device" element={ <Example /> }></Route>
        </Routes>
    </div>
  );
}

export default App;
