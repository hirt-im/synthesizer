import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { synth, effectValues } from './audio/audio';
import * as Tone from 'tone';
import { keyToNote, updateKeyToNote } from './audio/keyToNote';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let octave = 4;
updateKeyToNote();

let currNotes = {};
document.addEventListener('keydown', (e) => {

  if (e.key === '/'){
    octave++;
    updateKeyToNote();
    return;
  }

  if (e.key === '.'){
    octave--;
    updateKeyToNote();
    return;
  }

  if (keyToNote[e.key]){
    if (!currNotes[e.key]){
      synth.triggerAttack(keyToNote[e.key], Tone.now(), effectValues["Velocity"]);
      }
    currNotes[e.key] = true;
    }
  return;
})


document.addEventListener('keyup', (e) => {
  if(keyToNote[e.key]){
    synth.triggerRelease(keyToNote[e.key]);
  }
  delete currNotes[e.key];
})


export { octave };