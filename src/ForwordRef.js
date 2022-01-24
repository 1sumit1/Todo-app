import React,{useRef} from 'react'
import Child from './Child';

export default function ForwordRef() {
    let inputRef=useRef(null);
    function UpdateInput(){
        inputRef.current.value="10000";
        inputRef.current.style.color="red";
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>ForwordRef in React</h1>
            <Child ref={inputRef}/>
            <button onClick={UpdateInput}>Update InputBox</button>
        </div>
    )
}
