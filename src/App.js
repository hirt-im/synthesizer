import './App.css';
import Keyboard from './components/keyboard';
import { Knob, KnobGroup } from './components/knob';
import WaveTypeSelector from './components/wavetypeSelector';
import FilterTypeSelector from './components/filtertypeSelector';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='knob-group-wrapper-wrapper'>
          <KnobGroup label="Filter">
            <FilterTypeSelector />
            <Knob rotation="-120" value="0" min="0" max="10000" id="11" label="Cutoff" effectName="filterCutoff"/>
          </KnobGroup>
          <KnobGroup label="Chorus">
            <Knob rotation="-120" value="0" min="0" max="100" id="10" label="Frequency" effectName="chorusFreq"/>
            <Knob rotation="-120" value="0" min="0" max="100" id="0" label="Delay" effectName="chorusDelay"/>
            <Knob rotation="-120" value="0" min="0" max="1" id="1" label="Feedback" effectName="chorusFeedback"/>
          </KnobGroup>
          <KnobGroup label="Ping Pong Delay">
            <Knob rotation="-120" value="0" min="0" max="1" id="4" label="Delay" effectName="pingpongDelay"/>
            <Knob rotation="-120" value="0" min="0" max="1" id="5" label="Feedback" effectName="pingpongFeedback"/>
          </KnobGroup>
          <KnobGroup label="Vibrato">
            <Knob rotation="-120" value="0" min="0" max="1" id="6" label="Depth" effectName="vibratoDepth"/>
            <Knob rotation="-120" value="0" min="0" max="50" id="7" label="Frequency" effectName="vibratoFreq"/>
          </KnobGroup>
        </div>
        
        <div className='knobs'>
          <Knob rotation="-120" value="0.4" min="0" max="1" id="2" label="Velocity" effectName="Velocity"/>
          <Knob rotation="-120" value="0.1" min="0" max="1" id="3" label="Distortion" effectName="Distortion"/>
        </div>
        <WaveTypeSelector />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
