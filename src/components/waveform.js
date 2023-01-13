import { waveform } from "../audio/audio";
import Sketch from 'react-p5';
// import * as p5 from 'react-p5';
import { useState, useEffect } from "react";


function Waveform(){


    // const [wave, setWave] = useState(waveform.getValue())

    let parentDiv;
    let width;
    let height;

 
    // useEffect(() => {
    //     setWave(waveform.getValue());
    //     console.log(wave);
    // }, [waveform.buffer])

    useEffect(() => {
        parentDiv = document.getElementById('vis');
        width = parentDiv.offsetWidth;
        height = parentDiv.offsetHeight;
    }, [document.getElementById('vis')])


  
    let ampFactor = 10;

    let setup = (p5, parentRef) => {
		p5.createCanvas(width, height).parent(parentRef);
	};

    let draw = (p5) => {
        // console.log(waveform.getValue())
		p5.background(0);
		p5.stroke('white');
		let buffer = waveform.getValue();

        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < buffer.length; i++){
            let x = p5.map(i, 0, buffer.length, 0, width);
            let y = p5.map(buffer[i] * ampFactor, -1, 1, 0, height);
            p5.vertex(x,y);
        }
        p5.endShape();
	};

    return(
            <Sketch setup={setup} draw={draw} />
    );




}

export { Waveform };