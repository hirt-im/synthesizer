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
            envDecay: 0.3,
            envSustain: 0.3,
            envRelease: 0.3
        },
        "test3": {
            name: 'test3',
            chorusFreq: 20,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: .1,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 3444,
            filterType: 'lowpass',
            waveType: 'sawtooth',
            octave: 2,
            envAttack: 0.3,
            envDecay: 0.3,
            envSustain: 0.3,
            envRelease: 0.3
        }
    }
}

establishPresets();

export { presets, establishPresets };