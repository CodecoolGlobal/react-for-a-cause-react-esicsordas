import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import SubmitMessage from "./components/SubmitMessage";

import { useState } from 'react';

function App() {
  const  [page, setPage] = useState("");

  return (
    <div className="App">
      <Header onActivate = {(page) => setPage(page)} className="App-header"></Header>
      <div className='content'>
        {page === 'Home' || page === '' ? <Home/> : null}
        {page === 'About' ? <About/> : null}
        {page === 'Contact' ? <Contact onActivate = {(page) => setPage(page)} /> : null}
        {page === 'Elküldés' ? <SubmitMessage/> : null}
      </div>
    </div>
  );
}

export default App;
