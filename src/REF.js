import React, { Component,createRef } from 'react'

export default class REF extends Component {
    constructor(){
        super();
        this.inputRef=createRef();

    }
    componentDidMount(){
        console.log(this.inputRef.current.value="1000");
    }

    getValue() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="red"
        this.inputRef.current.style.backgroundColor="black"
    }
    render() {
        return (
            <div>
                <h2>Ref in React</h2>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getValue()}>Check Ref</button>
            </div>
        )
    }
}
