import generateNote from '../audio/audio.js';
import { getFrequency, noteFrequencies }from '../audio/frequencies';
import { octave } from '../index.js';

export default function Key(props){
    let sharpNote = props.note + "#";

    const playNote = () => {
        console.log(props.note);
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
