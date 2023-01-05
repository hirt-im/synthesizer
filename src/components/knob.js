import { useState } from 'react';



export default function Knob(props){

    const knobNum = parseInt(props.id);


    const [prevRotation, setPrevRot] = useState(props.rotation);
    let currRotation = parseInt(prevRotation);
    const [value, setValue] = useState(props.value);


    const min = parseInt(props.min);
    const max = parseInt(props.max);

    const minRad = -135 * (Math.PI / 180);
    const maxRad = 135 * (Math.PI / 180);

    const slidingMax = maxRad * 2;

    let initialY;

    let tickRate = 1;



    function rotate(){
        if (currRotation < -135){
            setValue(min.toFixed(2));
            return;
        }
        if (currRotation > 135){
            setValue(max.toFixed(2));
            return;
        }
        let knobWrapper = document.getElementsByClassName('knob-wrapper')[knobNum];
        knobWrapper.style.transform = 'rotate(' + currRotation +'deg)';
        console.log(currRotation);
        calculateValue();
    }

    function calculateValue(){
        let currRad = currRotation * (Math.PI / 180);
        let valueFactor = (currRad + maxRad) / slidingMax;
        // let newValue = Math.round((valueFactor * max) * 100) / 100;
        let newValue = (valueFactor * max) * 100 / 100;

        setValue(newValue.toFixed(2));
        console.log(value);
    }

    function handleMouseMove(e){
        console.log(initialY);

        e.preventDefault();
            
        let y = e.clientY;
        let rotation = (y - initialY) / tickRate;
        currRotation -= rotation;
        rotate();
        console.log('currRot: ' + currRotation);

        console.log('rotation: ' + rotation);
        console.log(value);

        initialY = e.clientY;



        document.addEventListener('mouseup', (e) => {
            console.log(prevRotation)
            setPrevRot(currRotation);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', (e));
        })
    }

    function rotateKnob(e){
        initialY = e.clientY;
        console.log(initialY);
        document.addEventListener('mousemove', handleMouseMove);
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

