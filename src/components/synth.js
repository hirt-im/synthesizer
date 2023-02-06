import { useEffect, useState } from "react";
import { presets } from '../audio/presets';
import { updateSettings, currSettings } from './settings';
import { KnobGroup, Knob } from './knob';
import WaveTypeSelector from './wavetypeSelector';
import FilterTypeSelector from './filtertypeSelector'
import { updateSynth } from "../audio/audio";
import { octave } from '../index';
import { updateKeyToNote } from "../audio/keyToNote";
import { Waveform } from "./waveform";
import { themes, updateTheme, currTheme } from "./themes";
import Controls from "./controls";
import Octave from './octave';




export default function Synth(){

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
        updateSettings(presets[e.target.value]);
        updateSynth();
    }

    function changeTheme(e){
        updateTheme(e.target.value);
        localStorage.setItem('theme', e.target.value);
    }

    return(
        <div className='synth-wrapper' id='synth'>
            
            <KnobGroup label="Oscillator" class='oscillator'>
                <WaveTypeSelector wave={currSettings.waveType} />  
            </KnobGroup>

            <KnobGroup label="Filter" class='filter'>
                <FilterTypeSelector filter={currSettings.filterType} />
                <Knob rotation="-120" value={currSettings.filterCutoff} min="0" max="9000" id="11" label="Cutoff" effectName="filterCutoff"/>
            </KnobGroup>

            <KnobGroup label="Envelope" class='envelope'>
                <Knob rotation="-120" value={currSettings.envAttack} min="0" max="2" id="12" label="Attack" effectName="envAttack"/>
                <Knob rotation="-120" value={currSettings.envDecay} min="0" max="2" id="13" label="Decay" effectName="envDecay"/>
                <Knob rotation="-120" value={currSettings.envSustain} min="0" max="1" id="14" label="Sustain" effectName="envSustain"/>
                <Knob rotation="-120" value={currSettings.envRelease} min="0" max="2" id="15" label="Release" effectName="envRelease"/>
            </KnobGroup>

            <KnobGroup label="Chorus" class='chorus'>
                <Knob rotation="-120" value={currSettings.chorusFeedback} min="0" max="1" id="1" label="Feedback" effectName="chorusFeedback"/>
                <Knob rotation="-120" value={currSettings.chorusDelay} min="0" max="100" id="0" label="Delay" effectName="chorusDelay"/>
            </KnobGroup>

            <div className="visualizer" id='vis'>
                <Waveform />
            </div>

            <KnobGroup label="Delay" class='delay'>
                <Knob rotation="-120" value={currSettings.delayTime} min="0" max="1" id="22" label="Time" effectName="delayTime"/>
                <Knob rotation="-120" value={currSettings.maxDelay} min="0" max="1" id="23" label="Feedback" effectName="delayFeedback"/>
            </KnobGroup>
           
            <KnobGroup label="Note" class='note'>
                <Knob rotation="-120" value={currSettings.Velocity} min="0" max="1" id="2" label="Velocity" effectName="Velocity"/>
                <Knob rotation="-120" value={currSettings.portamento} min="0" max="1" id="20" label="Glide" effectName="portamento"/>
            </KnobGroup>

            <KnobGroup label="Reverb" class='reverb'>
                <Knob rotation="-120" value={currSettings.reverbDecay} min="0" max="2" id="16" label="Decay" effectName="reverbDecay"/>
                <Knob rotation="-120" value={currSettings.reverbDryWet} min="0" max="1" id="17" label="Dry/Wet" effectName="reverbDryWet"/>
            </KnobGroup>

            <KnobGroup label="Vibrato" class='vibrato'>
                <Knob rotation="-120" value={currSettings.vibratoDepth} min="0" max="1" id="6" label="Depth" effectName="vibratoDepth"/>
                <Knob rotation="-120" value={currSettings.vibratoFreq} min="0" max="50" id="7" label="Frequency" effectName="vibratoFreq"/>
            </KnobGroup>

            <KnobGroup label="Settings" class='settings'>
                <div className='settings-elements-wrapper'>
                    <div className="selectors-wrapper">
                        <div className="preset">
                            <div className='knob-label'>Preset</div>
                            <select className="menu-item" value={currSettings.name} onChange={handleChange}>
                                {presetOptions}
                            </select>
                        </div>
                        <div className='themes'>
                            <div className='knob-label'>Theme</div>
                            <select className="menu-item" onChange={changeTheme}>
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

const presetOptions = Object.keys(presets).map( key => <option className="menu-item" value={key}>{key}</option> )
const themeOptions = Object.keys(themes).map( key => <option className="menu-item" id={key}>{key}</option> )
