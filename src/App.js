import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Header className="App-header">
      </Header>
      <div className='content'></div>
      <Contact/>
    </div>
  );
}

export default App;
