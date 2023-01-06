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
          <Knob rotation="-120" value="34.00" min="0" max="120" id="1" label="Reverb"/>
          <Knob rotation="-120" value="2.00" min="0" max="3" id="2" label="Sustain"/>
        </div>
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
