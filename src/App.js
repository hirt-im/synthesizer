import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
