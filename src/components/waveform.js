import { waveform } from "../audio/audio";
import Sketch from 'react-p5';
import * as p5 from 'react-p5';
import { useState, useEffect } from "react";
import { currTheme } from '../components/themes';


function Waveform(){

    let parentDiv, width, height;
    useEffect(() => {
        parentDiv = document.getElementById('vis');
        width = parentDiv.offsetWidth;
        height = parentDiv.offsetHeight;
    }, [document.getElementById('vis')])


    let setup = (p5, parentRef) => {
		p5.createCanvas(width - 15, height).parent(parentRef);
	};



    let counter = 0;

    
    let start, end, buffer;
    let ampFactor = 8.5;
    let draw = (p5) => {

		// p5.background(p5.color('rgb(45, 46, 42)'));
        p5.background(p5.color(currTheme['--knob-group-bg-color']));
		p5.stroke('white');
        p5.strokeWeight(2);

        buffer = waveform.getValue();  
        let currMin = 0;
        let currMinIndex = 0;
        for (let i = 0; i < buffer.length / 2; i++){
            if (buffer[i] < currMin){
                currMin = buffer[i];
                currMinIndex = i;
            }
        }

        start = currMinIndex;
        end = start + (buffer.length / 2);
        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < end; i++){
            let x = p5.map(i, start, end, 0, width);
            let y = p5.map(buffer[i] * ampFactor, -1, 1, 0, height);
            p5.vertex(x,y);
            // p5.line(x, height, x, y);
        }
        p5.endShape();

        counter++;
	};

    // IDEA:
    // compare current waveform to previous waveform, if it's too different, don't draw it??? fuck me.

    return(
            <Sketch setup={setup} draw={draw} />
    );
}

export { Waveform };