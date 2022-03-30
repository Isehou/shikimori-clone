import './App.css';
import {useState, useEffect} from 'react';
import SomeWork from './SomeWork';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  const [link , setLink] = useState('home')
  const links = [{ label: "Home" , link: "home"}, { label: "About" , link: "about" }]
  const changeLink = (name) => {
    setLink(name)
    // console.log(name);
  }
  return (
    <div className='main'>
      <Header changeLink={changeLink} links={links} />
      {link === 'home' && <Home />}
      {link === 'about' && <h1>About</h1>}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
