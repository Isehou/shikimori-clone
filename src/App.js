import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UseStateTest from './components/someData/UsestateTest';
import UseEffectTest from './components/someData/UseEffectTest';


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
      <UseStateTest /> 
      <UseEffectTest /> 
    </div>
  );
}

export default App;
