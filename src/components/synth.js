import { useEffect, useState } from "react";
import { presets } from '../audio/presets';
import { KnobGroup, Knob } from './knob';
import WaveTypeSelector from './wavetypeSelector';
import FilterTypeSelector from './filtertypeSelector'
import { updateSynth } from "../audio/audio";
import { octave } from '../index';
import { updateKeyToNote } from "../audio/keyToNote";



let currSettings = presets['dreary'];


export default function Synth(){
    const [settings, setSettings] = useState(currSettings);

    useEffect(() => {
        octave.octave = currSettings.octave;
        updateKeyToNote();
    }, [currSettings.octave])
    

    function handleChange(e){
        console.log(presets[e.target.value]);
        currSettings = presets[e.target.value];
        setSettings(currSettings);
    }

    return(
        <div className='synth-wrapper'>
            <KnobGroup label="Envelope">
                <Knob rotation="-120" value={settings.envAttack} min="0" max="2" id="12" label="Attack" effectName="envAttack"/>
                <Knob rotation="-120" value={settings.envDecay} min="0" max="2" id="13" label="Decay" effectName="envDecay"/>
                <Knob rotation="-120" value={settings.envSustain} min="0" max="1" id="14" label="Sustain" effectName="envSustain"/>
                <Knob rotation="-120" value={settings.envRelease} min="0" max="2" id="15" label="Release" effectName="envRelease"/>
            </KnobGroup>
            <KnobGroup label="Oscillator">
                <WaveTypeSelector wave={settings.waveType} />  
            </KnobGroup>

            <KnobGroup label="Filter">
                <FilterTypeSelector filter={settings.filterType} />
                <Knob rotation="-120" value={settings.filterCutoff} min="0" max="10000" id="11" label="Cutoff" effectName="filterCutoff"/>
            </KnobGroup>

            <KnobGroup label="Chorus">
                <Knob rotation="-120" value={settings.chorusFreq} min="0" max="100" id="10" label="Frequency" effectName="chorusFreq"/>
                <Knob rotation="-120" value={settings.chorusDelay} min="0" max="100" id="0" label="Delay" effectName="chorusDelay"/>
                <Knob rotation="-120" value={settings.chorusFeedback} min="0" max="1" id="1" label="Feedback" effectName="chorusFeedback"/>
            </KnobGroup>

            {/* <KnobGroup label="Ping Pong Delay">
                <Knob rotation="-120" value={settings.pingpongDelay} min="0" max="1" id="4" label="Delay" effectName="pingpongDelay"/>
                <Knob rotation="-120" value={settings.pingpongFeedback} min="0" max="1" id="5" label="Feedback" effectName="pingpongFeedback"/>
            </KnobGroup> */}
            
            <KnobGroup label="Vibrato">
                <Knob rotation="-120" value={settings.vibratoDepth} min="0" max="1" id="6" label="Depth" effectName="vibratoDepth"/>
                <Knob rotation="-120" value={settings.vibratoFreq} min="0" max="50" id="7" label="Frequency" effectName="vibratoFreq"/>
            </KnobGroup>
            <div className='knobs'>
                <Knob rotation="-120" value={settings.Velocity} min="0" max="1" id="2" label="Velocity" effectName="Velocity"/>
                <Knob rotation="-120" value={settings.Distortion} min="0" max="1" id="3" label="Distortion" effectName="Distortion"/>
            </div>

            {/* have preset selector, where upon change, it calls setSettings to new settings 
                store settings in separate file where they are objects with values for each effect
            */}
            <div>
                <div className='preset-label'>Preset</div>
                <select value={settings.name} onChange={handleChange}>
                    <option value="test1">test1</option>
                    <option value="dreary">dreary</option>
                    <option value="test3">test3</option>
                </select>
            </div>
        </div>
    );
}

export { currSettings };