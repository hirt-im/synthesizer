import { useEffect, useState } from 'react';
import { updateSynth } from '../audio/audio';
import { currSettings } from './synth';

function Knob(props){

    // const knobNum = parseInt(props.id);
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
    const numDigits = (props.max > 100 ? 0 : 2);


    useEffect(() => {
        currSettings[props.effectName] = props.value;
        let percentage = props.value / (max - min);
        currRotation = (270 * percentage) - 135;
        rotate();
        console.log(currSettings);
    }, [])
    
    function rotate(){
        if (currRotation < -135){
            currRotation = -135;
            setValue(min.toFixed(numDigits));
            return;
        }
        if (currRotation > 135){
            currRotation = 135;
            setValue(max.toFixed(numDigits));
            return;
        }
        let knobWrapper = document.getElementById(props.id);
        knobWrapper.style.transform = 'rotate(' + currRotation +'deg)';
        calculateValue();
    }

    function calculateValue(){
        let currRad = currRotation * (Math.PI / 180);
        let valueFactor = (currRad + maxRad) / slidingMax;
        let newValue = (valueFactor * max) * 100 / 100;
        setValue(newValue.toFixed(numDigits));
        currSettings[props.effectName] = newValue;
        // updateSynth();
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
        updateSynth();
    }

    function rotateKnob(e){
        initialY = e.clientY;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }


    return(
        <div className='knob-wrapper-wrapper'>
            <div className='knob-label'>{props.label}</div>
            <div className='knob-wrapper' id={props.id} onMouseDown={rotateKnob}>
                <div className='knob'>
                    <div className='knob-handle'></div>
                </div>
            </div>
            <h1 className='knob-value'>{value}</h1>
        </div>
    );
}


function KnobGroup(props){
    return(
        <div className='knob-group-wrapper'>
            <div>{props.label}</div>
            <div className='knob-group'>
                {props.children}
            </div>
        </div>
    );
}

export { Knob, KnobGroup };