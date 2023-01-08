import * as Tone from 'tone';

let audioCtx = new window.AudioContext();
let effectValues = {
    'chorusFreq': 0,
    'chorusDelay': 0,
    'chorusFeedback': 0,
    'Velocity': 0,
    'Distortion': 0,
    'pingpongDelay': 0,
    'pingpongFeedback': 0,
    'vibratoDepth': 0,
    'vibratoFreq': 0,
    'filterCutoff': 0,
    'filterType': 'lowpass'
};


let synth = new Tone.PolySynth();

synth.set({
    oscillator: {
        type: "sine"
    }
})

let distortion = new Tone.Distortion(effectValues["Distortion"]);
let chorus = new Tone.Chorus(0,0,0);
let pingPong = new Tone.PingPongDelay(effectValues['pingpongDelay'], effectValues['pinpongFeedback']);
let vibrato = new Tone.Vibrato(0,0);
let filter = new Tone.Filter(0, 'lowpass');

synth.connect(chorus);
chorus.connect(pingPong);
pingPong.connect(distortion);
distortion.toDestination();


function updateSynth(){
    synth.disconnect();
    distortion.distortion = effectValues["Distortion"] * .75;
    chorus = new Tone.Chorus(effectValues['chorusFreq'], effectValues['chorusDelay'], 0);
    chorus.set({
        feedback: effectValues['chorusFeedback'] * .9
    })
    pingPong = new Tone.PingPongDelay(effectValues['pingpongDelay'], effectValues['pingpongFeedback'] * .9);
    vibrato = new Tone.Vibrato(effectValues['vibratoFreq'], effectValues['vibratoDepth']);
    filter = new Tone.Filter(effectValues['filterCutoff'], effectValues['filterType']);

    
    synth.chain(chorus, pingPong, vibrato, filter, distortion.toDestination()); 
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



export { effectValues, audioCtx, updateSynth , synth, filter };