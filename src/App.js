import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import { useState } from 'react';


function App() {
  const  [page, setPage] = useState("");

  return (
    <div className="App">
      <Header onActivate = {(page) => setPage(page)} className="App-header"></Header>
      <div className='content'>
        {page === 'Contact' ? <Contact/> : null}
        {page === 'About' ? <About/> : null}
        {page === 'Home' || page === '' ? <Home/> : null}
      </div>
    </div>
  );
}

export default App;
