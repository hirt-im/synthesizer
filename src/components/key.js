import { useEffect } from 'react';
import generateNote from '../audio/audio.js';
import getFrequency from '../audio/frequencies';
import { octave } from '../index.js';

export default function Key(props){

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if(e.key === keypresses[props.note]){
                playNote();
            }
        })
    })

    let sharpNote = props.note + "#";

    const playNote = () => {
        console.log(props.note);
        if (props.sharp){
            generateNote(getFrequency(props.note, octave + 1));
        }
        generateNote(getFrequency(props.note, octave))
    }

    const playNoteSharp = (e) => {
        console.log(sharpNote)
        console.log(props.note);
        generateNote(getFrequency(sharpNote, octave))
        e.stopPropagation();
    }

    if (props.note === 'E' || props.note === 'B' || props.sharp === 'no'){
        return (
            <div className={'key natural ' + props.note} onClick={playNote}></div>
        );
    }

    return (
        <div className={'key natural ' + props.note} onClick={playNote}>
            <div className={'key sharp ' + sharpNote} onClick={playNoteSharp}></div>
        </div>
    );
}

let keypresses = {
    'C': 'a',
    'C#': 'w',
    'D': 's',
    'D#': 'e',
    'E': 'd',
    'F': 'f',
    'F#': 't',
    'G': 'g',
    'G#': 'y',
    'A': 'h',
    'A#': 'u',
    'B': 'j',
    'C2': 'k'
}