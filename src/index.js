import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import getFrequency from './audio/frequencies';
import generateOsc, { audioCtx } from './audio/audio';

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
  'k': 'C2'
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
    let freq = getFrequency(keypresses[e.key], octave);
    if (!currNotes[e.key]){
      let osc = generateOsc(freq);
      currNotes[e.key] = osc;
      osc[0].start();
    }
  }
})

document.addEventListener('keyup', (e) => {
  currNotes[e.key][1].gain.setTargetAtTime(0, audioCtx.currentTime, 0.03);
  delete currNotes[e.key];
})



export { octave };
