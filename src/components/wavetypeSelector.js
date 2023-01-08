import { synth } from "../audio/audio";

export default function WaveTypeSelector(){

    function handleChange(e){
        synth.set({
            oscillator: {
                type: e.target.value
            }
        })
    }

    return(
        <div>
            <select onChange={handleChange}>
                <option value="sine">Sine</option>
                <option value="triangle">Triangle</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
            </select>
        </div>
    );
}