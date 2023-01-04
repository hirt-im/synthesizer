export default function Key(props){
    let sharpNote = props.note + "#";

    const playNote = () => {
        console.log(props.note);
    }

    const playNoteSharp = (e) => {
        console.log(sharpNote)
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