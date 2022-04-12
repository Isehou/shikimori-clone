import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UsestateTest from './components/someData/UsestateTest';


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
      <UsestateTest /> 
    </div>
  );
}

export default App;
