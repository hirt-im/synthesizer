let audioCtx = new window.AudioContext();
let oscillators = [];
let effectValues = {
    "Volume": 0,
    "Sustain": 0,
    "Reverb": 0
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

export default function generateNote(freq){
    let osc = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();
    gainNode.gain.value = effectValues["Volume"];
    osc.frequency.value = freq;

    console.log(effectValues);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    setTimeout( () => {
        osc.stop();
    }, 1000);
}




// generateOscillator();
// routeOscillators();

export { effectValues};