import Keyboard from './components/keyboard';
import { Knob, KnobGroup } from './components/knob';
import WaveTypeSelector from './components/wavetypeSelector';
import FilterTypeSelector from './components/filtertypeSelector';
import Synth from './components/synth';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Synth />
        {/* <Keyboard /> */}
      </header>
    </div>
  );
}



//TODO:
// get rid of extra space at bottom of every knob group, or center all elements 

export default App;
