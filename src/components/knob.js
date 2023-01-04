import { useState } from 'react';

export default function Knob(props){

    const [currRotation, setRotation] = useState(props.rotation);
    const [value, setValue] = useState(props.value);

    const min = parseInt(props.min);
    const max = parseInt(props.max);

    const minRad = -135 * (Math.PI / 180);
    const maxRad = 135 * (Math.PI / 180);

    const slidingMax = maxRad * 2;


    const rotate = () => {
        let knobWrapper = document.getElementsByClassName('knob-wrapper')[0];
        setRotation(parseInt(currRotation) + 15);
        knobWrapper.style.transform = 'rotate(' + currRotation +'deg)';
        calculateValue();
    }

    const calculateValue = () => {
        let currRad = currRotation * (Math.PI / 180);
        let valueFactor = (currRad + maxRad) / slidingMax;
        let newValue = Math.round((valueFactor * max) * 100) / 100;
        setValue(newValue);
        console.log(value);
    }

    return(
        <div className='knob-wrapper-wrapper'>
            <div className='knob-wrapper' onClick={rotate}>
                <div className='knob'>
                    <div className='knob-handle'></div>
                </div>
            </div>
            <h1 className='knob-value'>{value}</h1>
        </div>
    );
}