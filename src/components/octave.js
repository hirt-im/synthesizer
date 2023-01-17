import { useState } from 'react';
import { octave } from '../index';

export default function Octave(){
    const [currOctave, setOctave] = useState(octave.octave);
    document.addEventListener('keypress', (e) => {
        let key = e.key;
        if (key === '/'){
            if(currOctave > 6){return;}
            setOctave(currOctave + 1);
            return;
        }
        else if (key === '.'){
            if(currOctave < 1){return;}
            setOctave(currOctave - 1);
            return;
        }
    })

    return(
        <div className='octave-wrapper'>
            <div>Octave: {currOctave}</div>
            <div>{'. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ /'} </div>         
        </div>
    );
}