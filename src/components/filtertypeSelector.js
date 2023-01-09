import { effectValues, synth, updateSynth, filter } from "../audio/audio";
import { useState } from "react";

export default function FilterTypeSelector(props){

    const [filter, setFilter] = useState(props.filter);

    function handleChange(e){
        setFilter(e.target.value);
        effectValues['filterType'] = e.target.value;
        updateSynth();
    }

    return(
        <div>
            <div className="type-label">Shape</div>
            <select value={filter} onChange={handleChange}>
                <option value="lowpass">lowpass</option>
                <option value="highpass">highpass</option>
                <option value="lowshelf">lowshelf</option>
                <option value="highshelf">highshelf</option>
                <option value="bandpass">bandpass</option>
                <option value="notch">notch</option>
            </select>
            <div className="selection-type">
                <img className='selection-image' src={'../icons/filter-' + filter + '.svg'}></img>
            </div>
        </div>
    );
}
