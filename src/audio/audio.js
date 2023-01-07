import * as Tone from 'tone';

let audioCtx = new window.AudioContext();
let effectValues = {};

const synth = new Tone.PolySynth();
const distortion = new Tone.Distortion(effectValues["Distortion"]);
const chorus = new Tone.Chorus(10,8,0.5);

synth.connect(chorus);
chorus.connect(distortion);
distortion.toDestination();


function updateSynth(){
    // call function whenever you adjust knob value

    chorus.delayTime = effectValues["chorusDelay"];
    chorus.depth = effectValues["chorusDepth"];
    // chorus.frequency = effectValues["chorusFreq"];
    distortion.distortion = effectValues["Distortion"];
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



export { effectValues, audioCtx, updateSynth , synth };