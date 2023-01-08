import * as Tone from 'tone';

let audioCtx = new window.AudioContext();
let effectValues = {
    'chorusDelay': 0,
    'chorusDepth': 0,
    'Velocity': 0,
    'Distortion': 0,
    'pingpongDelay': 0,
    'pingpongFeedback': 0,
    'vibratoDepth': 0,
    'vibratoFreq': 0
};

let synth = new Tone.PolySynth();
let distortion = new Tone.Distortion(effectValues["Distortion"]);
let chorus = new Tone.Chorus(10,8,0.5);
let pingPong = new Tone.PingPongDelay(effectValues['pingpongDelay'], effectValues['pinpongFeedback']);
let vibrato = new Tone.Vibrato(0,0);

synth.connect(chorus);
chorus.connect(pingPong);
pingPong.connect(distortion);
distortion.toDestination();


function updateSynth(){

    synth.disconnect();
    distortion.distortion = effectValues["Distortion"] * .75;
    chorus = new Tone.Chorus(10,8,0.5);
    pingPong = new Tone.PingPongDelay(effectValues['pingpongDelay'], effectValues['pingpongFeedback'] * .9);
    vibrato = new Tone.Vibrato(effectValues['vibratoFreq'], effectValues['vibratoDepth']);

    synth.connect(chorus);
    chorus.connect(pingPong);
    pingPong.connect(vibrato);
    vibrato.connect(distortion);
    distortion.toDestination();


    console.log(effectValues);

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