let presets = {
    "test1": {
        name: 'test1',
        chorusFreq: 10,
        chorusDelay: 0,
        chorusFeedback: 0,
        Velocity: 0.3,
        Distortion: 0,
        pingpongDelay: 0,
        pingpongFeedback: 0,
        vibratoDepth: 0,
        vibratoFreq: 0,
        filterCutoff: 1220,
        filterType: 'lowpass',
        waveType: 'sine'
    },

    "dreary": {
        name: 'dreary',
        chorusFreq: 20,
        chorusDelay: 0,
        chorusFeedback: 0,
        Velocity: .3,
        Distortion: 0,
        pingpongDelay: 0,
        pingpongFeedback: 0,
        vibratoDepth: 0,
        vibratoFreq: 0,
        filterCutoff: 330,
        filterType: 'highpass',
        waveType: 'triangle'
    }
}

function establishPresets(){
    presets = {
        "test1": {
            name: 'test1',
            chorusFreq: 10,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: 0.3,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 1220,
            filterType: 'lowpass',
            waveType: 'sine'
        },
    
        "dreary": {
            name: 'dreary',
            chorusFreq: 20,
            chorusDelay: 0,
            chorusFeedback: 0,
            Velocity: .3,
            Distortion: 0,
            pingpongDelay: 0,
            pingpongFeedback: 0,
            vibratoDepth: 0,
            vibratoFreq: 0,
            filterCutoff: 330,
            filterType: 'highpass',
            waveType: 'triangle'
        }
    }
}

export { presets, establishPresets };