import React,{useRef} from 'react'

export default function UseRef() {
    let inputRef=useRef(null);
    function HandleInput(){
        console.log("Function Call");
        // inputRef.current.value="1000";
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.display="none";
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={HandleInput}>Handle Ref</button>
        </div>
    )
}
