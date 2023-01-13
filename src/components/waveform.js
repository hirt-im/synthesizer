import { waveform } from "../audio/audio";
import Sketch from 'react-p5';
// import * as p5 from 'react-p5';
import { useState, useEffect } from "react";


function Waveform(){


    const [wave, setWave] = useState(waveform.getValue())

    let parentDiv;
    let width;
    let height;

 
    useEffect(() => {
        setWave(waveform.getValue());
        console.log(wave);
    }, [waveform.buffer])

    useEffect(() => {
        parentDiv = document.getElementById('vis');
        width = parentDiv.offsetWidth;
        height = parentDiv.offsetHeight;
    }, [document.getElementById('vis')])


  
    let currWave = waveform.getValue();

    let setup = (p5, parentRef) => {
		p5.createCanvas(width, height).parent(parentRef);
	};

    let draw = (p5) => {
        // console.log(waveform.getValue())
		p5.background(0);
		p5.fill(255);
		p5.ellipse(200,20,20,20);
	};

    return(
            <Sketch setup={setup} draw={draw} />
    );




}

export { Waveform };