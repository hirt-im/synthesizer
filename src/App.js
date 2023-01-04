import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';
import Knob from './components/knob';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Keyboard />
        <div> l</div>
        <Knob rotation="-120" value="0" min="0" max="10"/>
      </header>
    </div>
  );
}

export default App;
