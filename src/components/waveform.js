import { waveform } from "../audio/audio";

function logWaveform(){
    let wave = waveform.getValue();
    console.log(wave);
}

export { logWaveform };