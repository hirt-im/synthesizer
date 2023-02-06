import { useEffect, useState } from 'react';
import { currSettings } from './settings';

export default function Octave(){
    const [currOctave, setOctave] = useState(currSettings.octave);

    useEffect(() => {
        setOctave(currSettings.octave);
    }, [currSettings])

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
