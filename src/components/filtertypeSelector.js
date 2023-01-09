import { effectValues, synth, updateSynth, filter } from "../audio/audio";
import { useState } from "react";

export default function FilterTypeSelector(){

    const [filter, setFilter] = useState('lowpass');

    function handleChange(e){
        setFilter(e.target.value);
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
                <img className='selection-image' src={'../icons/filter-' + filter + '.svg'}></img>
            </div>
        </div>
    );
}
