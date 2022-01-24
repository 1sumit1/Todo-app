// import logo from './logo.svg';
import './App.css';
import React,{forwardRef, useState} from 'react'
import UseMemo from './UseMemo';
import REF from './REF';
import UseRef from './UseRef';
import ForwordRef from './ForwordRef';
import ArrayList from './ArrayList';
import ArrayList1 from './ArrayList1';
import { Restorent } from './Restorent/Restorent';
import { Todo } from './TOD/Todo';
import { Temp } from './Weather app/Temp';
import Restorents from './FoodApp/Restorents';


function App() {
  return (
    <div className="App">
      
      {/* <RedCount cmp={Counter}/>
      <GreenCount cmp={Counter}/>
      <YelllowCount cmp={Counter}/> */}
      {/* <UseMemo/> */}
      {/* <REF/> */}
      {/* <UseRef/> */}
      {/* <ForwordRef/> */}
      {/* <ArrayList/> */}
      {/* <ArrayList1/> */}

      <Restorent/>

      {/* <Todo/> */}

      {/* <Temp/> */}

      {/* <Restorents/> */}
    
    </div>
  );
}

function RedCount(props){
  return <h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>
}

function GreenCount(props){
  return <h2 style={{backgroundColor:"green",width:100}}><props.cmp/></h2>
}

function YelllowCount(props){
  return <h2 style={{backgroundColor:"yellow",width:100}}><props.cmp/></h2>
}

function Counter(){
  const[count,setCount]=useState(0);
  return<div>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>

}

export default App;
