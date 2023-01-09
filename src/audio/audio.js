import * as Tone from 'tone';
import { currSettings } from '../components/synth';

let audioCtx = new window.AudioContext();
let synth = new Tone.PolySynth();

synth.set({
    oscillator: {
        type: currSettings.waveType
    }
})

let distortion = new Tone.Distortion(currSettings["Distortion"]);
let chorus = new Tone.Chorus(0,0,0);
let pingPong = new Tone.PingPongDelay(currSettings['pingpongDelay'], currSettings['pinpongFeedback']);
let vibrato = new Tone.Vibrato(0,0);
let filter = new Tone.Filter(0, 'lowpass');

synth.connect(chorus);
chorus.connect(pingPong);
pingPong.connect(distortion);
distortion.toDestination();


function updateSynth(){
    synth.disconnect();
    distortion.distortion = currSettings.Distortion * .75;
    chorus = new Tone.Chorus(currSettings.chorusFreq, currSettings.chorusDelay, 0);
    chorus.set({
        feedback: currSettings.chorusFeedback * .9
    })
    pingPong = new Tone.PingPongDelay(currSettings.pingpongDelay, currSettings.pingpongFeedback * .9);
    vibrato = new Tone.Vibrato(currSettings.vibratoFreq, currSettings.vibratoDepth);
    filter = new Tone.Filter(currSettings.filterCutoff, currSettings.filterType);

    
    synth.chain(chorus, pingPong, vibrato, filter, distortion.toDestination()); 
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



export { currSettings as effectValues, audioCtx, updateSynth , synth, filter };