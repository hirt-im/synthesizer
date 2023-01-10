import * as Tone from 'tone';
import { currSettings } from '../components/synth';

let audioCtx = new window.AudioContext();
let synth = new Tone.PolySynth();
let distortion = new Tone.Distortion(currSettings["Distortion"]);
let chorus = new Tone.Chorus(0,0,0);
let vibrato = new Tone.Vibrato(0,0);
let filter = new Tone.Filter(0, 'lowpass');
let compressor = new Tone.Compressor(-30, 2);

synth.set({
    oscillator: {
        type: currSettings.waveType
    }
})

function updateSynth(){
    synth.disconnect();

    distortion.distortion = currSettings.Distortion * .75;

    chorus.set({
        feedback: currSettings.chorusFeedback * .9,
        frequency: currSettings.chorusFreq,
        delayTime: currSettings.chorusDelay
    })

    vibrato.set({
        frequency: currSettings.vibratoFreq,
        depth: currSettings.vibratoDepth
    })

    filter.set({
        frequency: currSettings.filterCutoff,
        type: currSettings.filterType
    })
    
    synth.set({
        envelope:{
            decayCurve: 'linear',
            attack: currSettings.envAttack,
            decay: currSettings.envDecay,
            sustain: currSettings.envSustain,
            release: currSettings.envRelease
        },
        oscillator: {
            type: currSettings.waveType
        }
    })

    synth.chain(chorus, vibrato, filter, compressor.toDestination()); 
}





export default function generateOsc(freq){
    let osc = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();

    let delay = audioCtx.createDelay();
    delay.delayTime.value = currSettings["Delay"];
    console.log(delay);

    


    gainNode.gain.value = currSettings["Gain"];
    osc.frequency.value = freq;

    console.log(currSettings);
    console.log(osc);

    osc.connect(gainNode);
    // gainNode.connect(audioCtx.destination);
    gainNode.connect(delay);
    delay.connect(audioCtx.destination);
    return [osc, gainNode];
}



export { audioCtx, updateSynth , synth, filter };