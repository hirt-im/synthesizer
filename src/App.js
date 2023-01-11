import './App.css';
import Keyboard from './components/keyboard';
import { Knob, KnobGroup } from './components/knob';
import WaveTypeSelector from './components/wavetypeSelector';
import FilterTypeSelector from './components/filtertypeSelector';
import Synth from './components/synth';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Synth />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
