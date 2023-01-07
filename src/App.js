import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';
import Knob from './components/knob';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='knobs'>
          <Knob rotation="-120" value="0.1" min="0" max="1" id="0" label="Gain"/>
          <Knob rotation="-120" value="0.4" min="0" max="1" id="1" label="Velocity"/>
          <Knob rotation="-120" value="34.00" min="0" max="120" id="2" label="Reverb"/>
          <Knob rotation="-120" value="2.00" min="0" max="3" id="3" label="Sustain"/>
          <Knob rotation="-120" value="1.00" min="0" max="10" id="4" label="Delay"/>
        </div>
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
