import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";
import * as Tone from 'tone';

let audioCtx = new window.AudioContext();
let oscillators = [];
let effectValues = {
    "Gain": 0.1,
    "Sustain": 0,
    "Reverb": 0,
    "Delay": 0,
    "Velocity": 0
}

const synth = new Tone.PolySynth().toDestination();;

function soundSynth(){

}

function generateOscillator(){
    let oscillator = audioCtx.createOscillator();
    oscillators.push(oscillator);
}


function routeOscillators(){
    oscillators.forEach(osc => {
        osc.connect(audioCtx.destination);
    })
}


export default function generateOsc(freq){
    let osc = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();

    let delay = audioCtx.createDelay();
    delay.delayTime.value = effectValues["Delay"];
    console.log(delay);

    


    gainNode.gain.value = effectValues["Gain"];
    osc.frequency.value = freq;

    console.log(effectValues);
    console.log(osc);

    osc.connect(gainNode);
    // gainNode.connect(audioCtx.destination);
    gainNode.connect(delay);
    delay.connect(audioCtx.destination);
    return [osc, gainNode];
}






// generateOscillator();
// routeOscillators();

export { effectValues, audioCtx, soundSynth, synth };