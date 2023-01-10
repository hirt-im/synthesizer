import { synth, updateSynth } from "../audio/audio";
import { useEffect, useState } from "react";
import { currSettings } from "./synth";


export default function WaveTypeSelector(props){

    const [wave, setWave] = useState(props.wave);

    useEffect(() => {
        setWave(currSettings.waveType);
        updateSynth();
    }, [currSettings.waveType]);

    
    function handleChange(e){
        setWave(e.target.value);
        currSettings['waveType'] = e.target.value;
        updateSynth();
    }

    return(
        <div>
            <div className='type-label'>Waveform</div>
            <select value={wave} onChange={handleChange}>
                <option value="sine">sine</option>
                <option value="triangle">triangle</option>
                <option value="square">square</option>
                <option value="sawtooth">sawtooth</option>
            </select>
            <div className="selection-type">
                <img className="selection-image" src={'../icons/wave-' + wave + '.svg'}></img>
            </div>
        </div>
    );
}
