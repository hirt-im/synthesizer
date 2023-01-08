import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import getFrequency from './audio/frequencies';
import generateOsc, { audioCtx, routeSynth } from './audio/audio';
import { synth, effectValues } from './audio/audio';
import * as Tone from 'tone';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let octave = 4;
let keyToNote = {
  'z': 'C',
  's': 'C#',
  'x': 'D',
  'd': 'D#',
  'c': 'E',
  'v': 'F',
  'g': 'F#',
  'b': 'G',
  'h': 'G#',
  'n': 'A',
  'j': 'A#',
  'm': 'B',
  ',': 'C'
}

let keyToNote2 = {
  'q': 'C',
  '2': 'C#',
  'w': 'D',
  '3': 'D#',
  'e': 'E',
  'r': 'F',
  '5': 'F#',
  't': 'G',
  '6': 'G#',
  'y': 'A',
  '7': 'A#',
  'u': 'B',
  'i': 'C'
}

let currNotes = {};

document.addEventListener('keydown', (e) => {

  if (e.key === '/'){
    octave++;
    return;
  }

  if (e.key === '.'){
    octave--;
    return;
  }

  if (keyToNote[e.key]){
    if (!currNotes[e.key]){
      if (e.key === ','){
        synth.triggerAttack(keyToNote[e.key] + (octave + 1).toString(), Tone.now(), effectValues["Velocity"]);
      }
      else{
        synth.triggerAttack(keyToNote[e.key] + octave.toString(), Tone.now(), effectValues["Velocity"]);
      }
      currNotes[e.key] = true;
    }
    return;
  }

  if (keyToNote2[e.key]){
    if (!currNotes[e.key]){
      if (e.key === 'i'){
        synth.triggerAttack(keyToNote2[e.key] + (octave + 2).toString(), Tone.now(), effectValues["Velocity"]);
      }
      else {
        synth.triggerAttack(keyToNote2[e.key] + (octave + 1).toString(), Tone.now(), effectValues["Velocity"]);
      }
      currNotes[e.key] = true;
    }
  }
})


document.addEventListener('keyup', (e) => {

  if(keyToNote[e.key]){
    if (e.key === ','){
      synth.triggerRelease(keyToNote[e.key] + (octave + 1).toString());
    }
    synth.triggerRelease(keyToNote[e.key] + octave.toString());
  }

  if(keyToNote2[e.key]){
    octave++;
    if (e.key === 'i'){
      synth.triggerRelease(keyToNote2[e.key] + (octave + 1).toString());
    }
    synth.triggerRelease(keyToNote2[e.key] + octave.toString());
    octave--;
  }
  delete currNotes[e.key];
})


export { octave };