import { useEffect, useState } from "react";
import { presets } from '../audio/presets';
import { KnobGroup, Knob } from './knob';
import WaveTypeSelector from './wavetypeSelector';
import FilterTypeSelector from './filtertypeSelector'
import { updateSynth } from "../audio/audio";
import { octave } from '../index';
import { updateKeyToNote } from "../audio/keyToNote";
import Keyboard from "./keyboard";
import { Waveform } from "./waveform";
import { themes, updateTheme, currTheme } from "./themes";
import Controls from "./controls";
import Octave from './octave';



let currSettings = presets['Soothing Pluck'];



export default function Synth(){
    const [settings, setSettings] = useState(currSettings);

    useEffect(() => {
        octave.octave = currSettings.octave;
        updateKeyToNote();
    }, [currSettings.octave])

    useEffect(() => {
        let selectedOption = document.getElementById(currTheme.name);
        selectedOption.selected = 'selected';
    }, [])

    function handleChange(e){
        console.log(presets[e.target.value]);
        currSettings = presets[e.target.value];
        setSettings(currSettings);
        updateSynth();
    }

    function changeTheme(e){
        updateTheme(e.target.value);
        localStorage.setItem('theme', e.target.value);
    }

    return(
        <div className='synth-wrapper' id='synth'>
            
            <KnobGroup label="Oscillator" class='oscillator'>
                <WaveTypeSelector wave={settings.waveType} />  
            </KnobGroup>

            <KnobGroup label="Filter" class='filter'>
                <FilterTypeSelector filter={settings.filterType} />
                <Knob rotation="-120" value={settings.filterCutoff} min="0" max="9000" id="11" label="Cutoff" effectName="filterCutoff"/>
            </KnobGroup>

            <KnobGroup label="Envelope" class='envelope'>
                <Knob rotation="-120" value={settings.envAttack} min="0" max="2" id="12" label="Attack" effectName="envAttack"/>
                <Knob rotation="-120" value={settings.envDecay} min="0" max="2" id="13" label="Decay" effectName="envDecay"/>
                <Knob rotation="-120" value={settings.envSustain} min="0" max="1" id="14" label="Sustain" effectName="envSustain"/>
                <Knob rotation="-120" value={settings.envRelease} min="0" max="2" id="15" label="Release" effectName="envRelease"/>
            </KnobGroup>

            <KnobGroup label="Chorus" class='chorus'>
                <Knob rotation="-120" value={settings.chorusFeedback} min="0" max="1" id="1" label="Feedback" effectName="chorusFeedback"/>
                <Knob rotation="-120" value={settings.chorusDelay} min="0" max="100" id="0" label="Delay" effectName="chorusDelay"/>
            </KnobGroup>

            <div className="visualizer" id='vis'>
                <Waveform />
            </div>

            <KnobGroup label="Delay" class='delay'>
                <Knob rotation="-120" value={settings.delayTime} min="0" max="1" id="22" label="Time" effectName="delayTime"/>
                <Knob rotation="-120" value={settings.maxDelay} min="0" max="1" id="23" label="Feedback" effectName="delayFeedback"/>
            </KnobGroup>
           
            <KnobGroup label="Note" class='note'>
                <Knob rotation="-120" value={settings.Velocity} min="0" max="1" id="2" label="Velocity" effectName="Velocity"/>
                <Knob rotation="-120" value={settings.portamento} min="0" max="1" id="20" label="Glide" effectName="portamento"/>
            </KnobGroup>

            <KnobGroup label="Reverb" class='reverb'>
                <Knob rotation="-120" value={settings.reverbDecay} min="0" max="2" id="16" label="Decay" effectName="reverbDecay"/>
                <Knob rotation="-120" value={settings.reverbDryWet} min="0" max="1" id="17" label="Dry/Wet" effectName="reverbDryWet"/>
            </KnobGroup>

            <KnobGroup label="Vibrato" class='vibrato'>
                <Knob rotation="-120" value={settings.vibratoDepth} min="0" max="1" id="6" label="Depth" effectName="vibratoDepth"/>
                <Knob rotation="-120" value={settings.vibratoFreq} min="0" max="50" id="7" label="Frequency" effectName="vibratoFreq"/>
            </KnobGroup>

            <KnobGroup label="Settings" class='settings'>
                <div className='settings-elements-wrapper'>
                    <div className="selectors-wrapper">
                        <div className="preset">
                            <div className='knob-label'>Preset</div>
                            <select value={settings.name} onChange={handleChange}>
                                {presetOptions}
                            </select>
                        </div>
                        <div className='themes'>
                            <div className='knob-label'>Theme</div>
                            <select onChange={changeTheme}>
                                {themeOptions}
                            </select>
                        </div>
                    </div>
                    <Octave />
                </div>
            </KnobGroup>
        </div>
    );
}

const presetOptions = Object.keys(presets).map( key => <option value={key}>{key}</option> )
const themeOptions = Object.keys(themes).map( key => <option id={key}>{key}</option> )


export { currSettings };