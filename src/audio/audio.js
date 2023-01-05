let audioCtx = new window.AudioContext;
let oscillators = [];


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
    osc.frequency.value = freq;

    osc.connect(audioCtx.destination);
    osc.start();
    setTimeout( () => {
        osc.stop();
    }, 1000);
}


// generateOscillator();
// routeOscillators();
