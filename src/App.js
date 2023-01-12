import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import SubmitMessage from "./components/SubmitMessage";
import Donate from './components/Donate'
//import DonateMessage from "./components/DonateMessage";

import { useState } from 'react';

function App() {
  const [page, setPage] = useState("");

  const thankYouForContact = ["Köszönjük megkeresését!", "Kollégáink hamarosan felveszik Önnel a kapcsolatot.", "Legyen szép napja!"];
  const thankYouForDonate = ["Köszönjük adományát és bankkártyaszámát!", "Haszosan költjók majd el adományát.", "Legyen szép napja!"];
  
  return (
    <div className="App">
      <Header onActivate={(page) => setPage(page)} className="App-header"></Header>
      <div className='content'>
        {page === 'Home' || page === '' ? <Home /> : null}
        {page === 'About' ? <About /> : null}
        <div className='contentholder'>
          {page === 'Contact' ? <Contact onSubmit={() => setPage("SubmitMessage")} /> : null}
            {page === 'Donate' ? <Donate onSubmit={() => setPage("SubmitMessage")} /> : null}
        </div>
        {page === 'SubmitMessage' ? <SubmitMessage content1={thankYouForContact[0]} content2={thankYouForContact[1]} content3= {thankYouForContact[2]}/> : null}
      
      </div>
    </div>
  );
}

export default App;
