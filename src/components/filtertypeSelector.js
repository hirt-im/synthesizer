import { effectValues, synth, updateSynth, filter } from "../audio/audio";

export default function FilterTypeSelector(){

    function handleChange(e){
        effectValues['filterType'] = e.target.value;
        filter.set({
            type: e.target.value
        })
    }

    return(
        <div>
            <div className="type-label">Shape</div>
            <select onChange={handleChange}>
                <option value="lowpass">lowpass</option>
                <option value="highpass">highpass</option>
                <option value="lowshelf">lowshelf</option>
                <option value="highshelf">highshelf</option>
                <option value="bandpass">bandpass</option>
                <option value="notch">notch</option>
            </select>
            <div className="selection-type">
                {/*image for filter type goes here */}
                svg goes here
            </div>
        </div>
    );
}
