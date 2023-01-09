import './App.css';
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header className="App-header">
      </Header>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
