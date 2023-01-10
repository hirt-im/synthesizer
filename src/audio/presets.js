let presets;

function establishPresets(){
    presets = {
        "test1": {
            name: 'test1',
            chorusFreq: 10,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: 0.1,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 1220,
            filterType: 'lowpass',
            waveType: 'sine',
            octave: 4,
            envAttack: 0.3,
            envDecay: 0.3,
            envSustain: 0.3,
            envRelease: 0.3
        },
    
        "dreary": {
            name: 'dreary',
            chorusFreq: 20,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: .1,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 330,
            filterType: 'highpass',
            waveType: 'triangle',
            octave: 4,
            envAttack: 0.3,
            envDecay: 0.2,
            envSustain: 0.3,
            envRelease: 0.3
        },
        "ringing": {
            name: 'ringing',
            chorusFreq: 30,
            chorusDelay: 88,
            chorusFeedback: .9,
            Velocity: .15,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 300,
            filterType: 'highpass',
            waveType: 'triangle',
            octave: 5,
            envAttack: 0,
            envDecay: 0.3,
            envSustain: 0.22,
            envRelease: 0.16
        }
    }
}

establishPresets();

export { presets, establishPresets };