
let natural1 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ','];
let sharp1 = ['s', 'd', 'g', 'h', 'j']
let natural2 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i'];
let sharp2 = ['2', '3', '5', '6', '7'];

function RowNatural(props){
    return(
        <div className='row-natural' id={props.id}>
            {props.arr.map((e) => (
                <div className='key'>{e}</div>
            ))}
        </div>
    );
}

function RowSharp(props){
    return(
        <div className='row-sharp' id={props.id}>
            <div className='key blank'></div>
            <div className='key'>{props.arr[0]}</div>
            <div className='key'>{props.arr[1]}</div>
            <div className='key blank'></div>
            <div className='key'>{props.arr[2]}</div>
            <div className='key'>{props.arr[3]}</div>
            <div className='key'>{props.arr[4]}</div>
            <div className='key blank'></div>
        </div>
    );
}

export default function Keyboard(){
    return(
        <div className='keyboard'>
            <RowSharp arr={sharp2} id='sharp2' />
            <RowNatural arr={natural2} id='natural2' />
            <RowSharp arr={sharp1} id='sharp1'/>
            <RowNatural arr={natural1} id='natural1'/>
        </div>
    );
}