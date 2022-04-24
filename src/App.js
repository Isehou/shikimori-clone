import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UseStateTest from './components/someData/UsestateTest';
import UseEffectTest from './components/someData/UseEffectTest';
import { Routes,  Route, } from "react-router-dom";


function App() {
  const [counter, setCounter] = useState(0)
  const links = [{ label: "Home", link: "/" }, 
                  { label: "Value", link: "/state" }, 
                  { label: "Resource", link: "/effect" }]
  return (
    <div className='main'>
      <Header links={links} />
        <Routes>
          <Route path="/" element={ <Home counter={counter} />} />
            <Route path="/state" element={ <UseStateTest counter={counter} setCounter={setCounter} />}></Route>
            <Route path="/effect" element={ <UseEffectTest /> }></Route>
        </Routes>
    </div>
  );
}

export default App;
