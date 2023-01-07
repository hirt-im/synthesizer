import { useEffect, useState } from 'react';
import { effectValues } from '../audio/audio';

export default function Knob(props){

    const knobNum = parseInt(props.id);
    const [prevRotation, setPrevRot] = useState(props.rotation);
    const [value, setValue] = useState(props.value);
    let currRotation = parseInt(prevRotation);

    const min = parseInt(props.min);
    const max = parseInt(props.max);

    const minRad = -135 * (Math.PI / 180);
    const maxRad = 135 * (Math.PI / 180);
    const slidingMax = maxRad * 2;

    let initialY;
    let rotRate = 1;


    useEffect(() => {
        let percentage = props.value / (max - min);
        currRotation = (270 * percentage) - 135;
        rotate();
    }, [])
    
    function rotate(){
        if (currRotation < -135){
            currRotation = -135;
            setValue(min.toFixed(2));
            return;
        }
        if (currRotation > 135){
            currRotation = 135;
            setValue(max.toFixed(2));
            return;
        }
        let knobWrapper = document.getElementsByClassName('knob-wrapper')[knobNum];
        knobWrapper.style.transform = 'rotate(' + currRotation +'deg)';
        calculateValue();
    }

    function calculateValue(){
        let currRad = currRotation * (Math.PI / 180);
        let valueFactor = (currRad + maxRad) / slidingMax;
        let newValue = (valueFactor * max) * 100 / 100;
        setValue(newValue.toFixed(2));
        effectValues[props.label] = newValue;
    }

    function handleMouseMove(e){
        e.preventDefault();
        let y = e.clientY;
        let rotation = (y - initialY) / rotRate;
        currRotation -= rotation;
        rotate();
        initialY = e.clientY;
    }

    function handleMouseUp(){
        setPrevRot(currRotation);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    function rotateKnob(e){
        initialY = e.clientY;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }


    return(
        <div className='knob-wrapper-wrapper'>
            <div className='knob-label'>{props.label}</div>
            <div className='knob-wrapper' onMouseDown={rotateKnob}>
                <div className='knob'>
                    <div className='knob-handle'></div>
                </div>
            </div>
            <h1 className='knob-value'>{value}</h1>
        </div>
    );
}
