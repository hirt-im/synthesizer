export default function Key(props){
    let className;
    if (props.note[1] === "#"){
        className = "key sharp";
    }
    else{
        className= "key natural";
    }
    return (
        <div className={className}>{props.note}</div>
    );
}