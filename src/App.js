import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';
import { Knob, KnobGroup } from './components/knob';
import WaveTypeSelector from './components/wavetypeSelector';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='knob-group-wrapper-wrapper'>
          <KnobGroup label="Chorus">
            <Knob rotation="-120" value="0.1" min="0" max="30" id="0" label="Delay" effectName="chorusDelay"/>
            <Knob rotation="-120" value="0.1" min="0" max="1" id="1" label="Depth" effectName="chorusDepth"/>
          </KnobGroup>
          <KnobGroup label="Ping Pong Delay">
            <Knob rotation="-120" value="0" min="0" max="1" id="4" label="Delay" effectName="pingpongDelay"/>
            <Knob rotation="-120" value="0" min="0" max="1" id="5" label="Feedback" effectName="pingpongFeedback"/>
          </KnobGroup>
          <KnobGroup label="Vibrato">
            <Knob rotation="-120" value="0" min="0" max="1" id="6" label="Depth" effectName="vibratoDepth"/>
            <Knob rotation="-120" value="0" min="0" max="100" id="7" label="Frequency" effectName="vibratoFreq"/>
          </KnobGroup>
        </div>
        
        <div className='knobs'>
          {/* <Knob rotation="-120" value="0.1" min="0" max="1" id="0" label="Gain" effectName="Gain"/> */}
          <Knob rotation="-120" value="0.4" min="0" max="1" id="2" label="Velocity" effectName="Velocity"/>
          {/* <Knob rotation="-120" value="34.00" min="0" max="120" id="2" label="Reverb" effectName="Reverb"/> */}
          {/* <Knob rotation="-120" value="2.00" min="0" max="3" id="3" label="Sustain" effectName="Sustain"/> */}
          {/* <Knob rotation="-120" value="1.00" min="0" max="10" id="4" label="Delay" effectName="Delay"/> */}
          <Knob rotation="-120" value="0.1" min="0" max="1" id="3" label="Distortion" effectName="Distortion"/>
          {/* <Knob rotation="-120" value="0.1" min="0" max="10" id="6" label="Chorus1" effectName="chorusFreq"/> */}
          
        </div>
        <WaveTypeSelector />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
