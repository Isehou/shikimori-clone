import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UseStateTest from './components/someData/UsestateTest';
import UseEffectTest from './components/someData/UseEffectTest';
import { Routes,  Route, } from "react-router-dom";


function App() {
  const [link, setLink] = useState('home')
  const links = [{ label: "Home", link: "home" }, { label: "About", link: "about" }]
  const changeLink = (name) => {
    setLink(name)
  }
  return (
    <div className='main'>
      <Header changeLink={changeLink} links={links} />
      {link === 'home' && <Home />}
      {link === 'about' && <h1>About</h1>}

        <Routes>
            <Route path="/components/someData/UseStateTest" element={ <UseStateTest /> }></Route>
            <Route path="/components/someData/UseEffectTest" element={ <UseEffectTest /> }>{}</Route>
        </Routes>

    </div>
  );
}

export default App;
