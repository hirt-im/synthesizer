import { synth, effectValues } from "../audio/audio";
import { useState } from "react";


export default function WaveTypeSelector(){

    const [wave, setWave] = useState('sine');

    function handleChange(e){
        setWave(e.target.value);
        effectValues['waveType'] = e.target.value;
        synth.set({
            oscillator: {
                type: e.target.value
            }
        })
    }

    return(
        <div>
            <div className='type-label'>Waveform</div>
            <select onChange={handleChange}>
                <option value="sine">sine</option>
                <option value="triangle">triangle</option>
                <option value="square">square</option>
                <option value="sawtooth">sawtooth</option>
            </select>
            <div className="selection-type">
                <img src={'../icons/wave-' + wave + '.svg'}></img>
            </div>
        </div>
    );
}
