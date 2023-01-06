import generateNote from '../audio/audio.js';
import getFrequency from '../audio/frequencies';
import { octave } from '../index.js';

export default function Key(props){

    const playNote = () => {
        if (props.note === 'C' && props.sharp === 'no'){
            generateNote(getFrequency(props.note, octave + 1));
            return;
        }
        generateNote(getFrequency(props.note, octave))
    }

    let sharpNote = props.note + "#";
    const playNoteSharp = (e) => {
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
