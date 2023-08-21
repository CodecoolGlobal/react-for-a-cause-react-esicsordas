import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SubmitMessage from "./components/SubmitMessage";
import Donate from "./components/Donate";
import { HOME } from "./pages";

import "./App.css";

const thankYouForContact = [
  "Köszönjük megkeresését!",
  "Kollégáink hamarosan felveszik Önnel a kapcsolatot.",
  "Legyen szép napja!",
];
const thankYouForDonate = [
  "Köszönjük adományát és bankkártyaszámát!",
  "Hasznosan költjük majd el vagyonát.",
  "Legyen szép napunk!",
];

function App() {
  const [page, setPage] = useState("");

  return (
    <div className="App">
      <Header onActivate={(page) => setPage(page)} className="App-header" />
      <div className="content">
        {page === HOME || page === "" ? <Home /> : null}
        {page === "About" ? <About /> : null}
        <div className="contentholder">
          {page === "Contact" ? (
            <Contact onSubmit={() => setPage("SubmitMessage")} />
          ) : null}
          {page === "Donate" ? (
            <Donate onSubmit={() => setPage("SubmitDonate")} />
          ) : null}
        </div>
        {page === "SubmitMessage" ? (
          <SubmitMessage
            content1={thankYouForContact[0]}
            content2={thankYouForContact[1]}
            content3={thankYouForContact[2]}
          />
        ) : null}
        {page === "SubmitDonate" ? (
          <SubmitMessage
            content1={thankYouForDonate[0]}
            content2={thankYouForDonate[1]}
            content3={thankYouForDonate[2]}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
