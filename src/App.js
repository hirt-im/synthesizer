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
        <div> ""</div>
        <div className='knobs'>
          <Knob rotation="-120" value="0.00" min="0" max="10" id="0"/>
          <Knob rotation="-120" value="0.00" min="0" max="120" id="1"/>
          <Knob rotation="-120" value="0.00" min="0" max="3" id="2"/>
        </div>
      </header>
    </div>
  );
}

export default App;
