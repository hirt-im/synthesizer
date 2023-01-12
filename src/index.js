import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { synth } from './audio/audio';
import * as Tone from 'tone';
import { keyToNote, updateKeyToNote } from './audio/keyToNote';
import { currSettings } from './components/synth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let octave = {
  octave: 4
}

updateKeyToNote();

let currNotes = {};
document.addEventListener('keydown', (e) => {
  let key = e.key.toLowerCase();
  if (key === '/'){
    octave.octave++;
    updateKeyToNote();
    return;
  }

  if (key === '.'){
    octave.octave--;
    updateKeyToNote();
    return;
  }

  if (keyToNote[key]){
    if (!currNotes[key]){
      synth.triggerAttack(keyToNote[key], Tone.now(), currSettings.Velocity);
      }
    currNotes[key] = true;
    }
  return;
})


document.addEventListener('keyup', (e) => {
  let key = e.key.toLowerCase();
  if(keyToNote[key]){
    synth.triggerRelease(keyToNote[key]);
  }
  delete currNotes[key];
})


export { octave };