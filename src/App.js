import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';
import { Knob, KnobGroup } from './components/knob';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KnobGroup label="Chorus">
          <Knob rotation="-120" value="0.1" min="0" max="30" id="5" label="Delay" effectName="chorusDelay"/>
          <Knob rotation="-120" value="0.1" min="0" max="1" id="2" label="Depth" effectName="chorusDepth"/>
        </KnobGroup>
        <div className='knobs'>
          {/* <Knob rotation="-120" value="0.1" min="0" max="1" id="0" label="Gain" effectName="Gain"/> */}
          <Knob rotation="-120" value="0.4" min="0" max="1" id="6" label="Velocity" effectName="Velocity"/>
          {/* <Knob rotation="-120" value="34.00" min="0" max="120" id="2" label="Reverb" effectName="Reverb"/> */}
          {/* <Knob rotation="-120" value="2.00" min="0" max="3" id="3" label="Sustain" effectName="Sustain"/> */}
          {/* <Knob rotation="-120" value="1.00" min="0" max="10" id="4" label="Delay" effectName="Delay"/> */}
          <Knob rotation="-120" value="0.1" min="0" max="1" id="0" label="Distortion" effectName="Distortion"/>
          {/* <Knob rotation="-120" value="0.1" min="0" max="10" id="6" label="Chorus1" effectName="chorusFreq"/> */}
          
        </div>
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
