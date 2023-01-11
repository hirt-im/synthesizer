let presets;

function establishPresets(){
    presets = {
        "soothing": {
            name: 'soothing',
            chorusFreq: 10,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: 0.17,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 1220,
            filterType: 'lowpass',
            waveType: 'sine',
            octave: 4,
            envAttack: 1.29,
            envDecay: 0.3,
            envSustain: 0.3,
            envRelease: 0.3,
            reverbDecay: 1.76,
            reverbDryWet: 0.19
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
            envRelease: 0.3,
            reverbDecay: 0.5,
            reverbDryWet: 0.5
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
            envRelease: 0.16,
            reverbDecay: 0.5,
            reverbDryWet: 0.33
        },
        "vibing": {
            name: 'vibing',
            chorusFreq: 0,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: .11,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: .21,
            vibratoFreq: 11.85,
            filterCutoff: 6300,
            filterType: 'lowpass',
            waveType: 'sawtooth',
            octave: 4,
            envAttack: 0.53,
            envDecay: 0.3,
            envSustain: 0.56,
            envRelease: 0.76,
            reverbDecay: 0.5,
            reverbDryWet: 0.33
        },
        "robot emoji": {
            name: 'robot emoji',
            chorusFreq: 0,
            chorusDelay: 15.19,
            chorusFeedback: .44,
            Velocity: .11,
            Distortion: 0.06,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 1,
            vibratoFreq: 41.3,
            filterCutoff: 0,
            filterType: 'highpass',
            waveType: 'sawtooth',
            octave: 3,
            envAttack: 0,
            envDecay: 0.56,
            envSustain: 0.34,
            envRelease: 0.35,
            reverbDecay: 0,
            reverbDryWet: 0
        }
    }
}

establishPresets();

export { presets, establishPresets };