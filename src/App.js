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
      </div>
      <div className='contentholder' /*writeOut = {(page) => setPage(page)}*/>
        {page === 'Contact' ? <Contact onSubmit = {() => setPage("SubmitMessage")}/> : null}
        {page === 'SubmitMessage' ? <SubmitMessage/> : null}
        </div>
    </div>
  );
}

export default App;
