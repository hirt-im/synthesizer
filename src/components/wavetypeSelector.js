import { synth, effectValues } from "../audio/audio";

export default function WaveTypeSelector(){

    function handleChange(e){
        effectValues['filterType'] = e.target.value;
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
                <option value="sine">Sine</option>
                <option value="triangle">Triangle</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
            </select>
            <div className="selection-type">
                {/*image for wave type goes here */}
                svg goes here
            </div>
        </div>
    );
}