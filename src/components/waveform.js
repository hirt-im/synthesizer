import { waveform } from "../audio/audio";
import Sketch from 'react-p5';
// import * as p5 from 'react-p5';
import { useState, useEffect } from "react";


function Waveform(){

    let parentDiv;
    let width;
    let height;

    useEffect(() => {
        parentDiv = document.getElementById('vis');
        width = parentDiv.offsetWidth;
        height = parentDiv.offsetHeight;
    }, [document.getElementById('vis')])

    let ampFactor = 8.5;

    let setup = (p5, parentRef) => {
		p5.createCanvas(width - 15, height - 25).parent(parentRef);
	};

    let start, end, buffer;

    // let colors = ['white', 'blue', 'red', 'orange', 'yellow', 'black'];
    // let colors = ['white', 'gray', 'black'];
    

    let draw = (p5) => {

        // console.log(waveform.getValue())
		p5.background(p5.color('#616368'));
		p5.stroke('white');

        // let color = Math.floor(Math.random() * colors.length);
        // p5.stroke(colors[color]);
        
        p5.strokeWeight(2);
		buffer = waveform.getValue();
        
  
        for (let i = 1; i < buffer.length; i++){
            if (buffer[i-1] > 0 && buffer[i] <= 0){
                start = i;
                break;
            }
        }

        end = (buffer.length / 2) + start;

        p5.beginShape();
        p5.noFill();
        for (let i = 0; i < end; i++){
            let x = p5.map(i, start, end, 0, width);
            let y = p5.map(buffer[i] * ampFactor, -1, 1, 0, height);

            // testing yin yang visualization
            p5.stroke('white');
            p5.rect(x, height, 2, -y);
            p5.stroke('black');
            p5.rect(x, y, 2, -height);


            p5.vertex(x,y);
        }
        p5.endShape();
	};

    return(
            <Sketch setup={setup} draw={draw} />
    );
}

export { Waveform };