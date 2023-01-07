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
let keypresses = {
  'a': 'C',
  'w': 'C#',
  's': 'D',
  'e': 'D#',
  'd': 'E',
  'f': 'F',
  't': 'F#',
  'g': 'G',
  'y': 'G#',
  'h': 'A',
  'u': 'A#',
  'j': 'B',
  'k': 'C'
}

let currNotes = {};

document.addEventListener('keydown', (e) => {
  if (e.key === 'x'){
    octave++;
  }
  if (e.key === 'z'){
    octave--;
  }
  if (keypresses[e.key]){
    if (!currNotes[e.key]){
      if (e.key === 'k'){
        synth.triggerAttack(keypresses[e.key] + (octave + 1).toString(), Tone.now(), effectValues["Velocity"]);
      }
      else {
        synth.triggerAttack(keypresses[e.key] + octave.toString(), Tone.now(), effectValues["Velocity"]);
      }
      currNotes[e.key] = true;
    }
  }
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'k'){
    synth.triggerRelease(keypresses[e.key] + (octave + 1).toString());
  }
  synth.triggerRelease(keypresses[e.key] + octave.toString());
  delete currNotes[e.key];
})



export { octave };
