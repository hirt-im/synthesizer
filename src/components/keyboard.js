import Key from './key';

export default function Keyboard(){
    return(
        <div className='keyboard'>
            <Key note="C"></Key>
            <Key note="D"></Key>
            <Key note="E"></Key>
            <Key note="F"></Key>
            <Key note="G"></Key>
            <Key note="A"></Key>
            <Key note="B"></Key>
            <Key note="C" sharp='no'></Key>    
        </div>
    );
}