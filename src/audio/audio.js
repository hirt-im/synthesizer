import * as Tone from 'tone';
import { currSettings } from '../components/settings';

let audioCtx = new window.AudioContext();
let synth = new Tone.PolySynth();
let distortion = new Tone.Distortion(currSettings["Distortion"]);
let chorus = new Tone.Chorus(0,0,0);
let vibrato = new Tone.Vibrato(0,0);
let filter = new Tone.Filter(0, 'lowpass');
let compressor = new Tone.Compressor(-30, 2);
let reverb = new Tone.Reverb(0);
let delay = new Tone.FeedbackDelay(0.01,0);
let waveform = new Tone.Waveform(512);
synth.chain(chorus, vibrato, filter, distortion, compressor, delay, reverb.toDestination()); 
Tone.Destination.connect(waveform);
synth.set({
    oscillator: {
        type: currSettings.waveType
    }
})


function updateSynth(){

    distortion.distortion = currSettings.Distortion * .75;

    chorus.set({
        feedback: currSettings.chorusFeedback * .9,
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
        },
        portamento: currSettings.portamento
    })

    delay.set({
        delayTime: currSettings.delayTime,
        feedback: currSettings.delayFeedback * .95,
    })

    if (currSettings.reverbDecay < 0.001){
        reverb.set({
            decay: 0.001,
            wet: currSettings.reverbDryWet
        })
    }
    else{
        reverb.set({
            decay: currSettings.reverbDecay,
            wet: currSettings.reverbDryWet
        })
    }
}


export { audioCtx, updateSynth, synth, filter, waveform };
