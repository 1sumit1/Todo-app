import React,{useState} from 'react'

export default function Demo() {
    const[count,setCount]=useState(0);
    
    return (
        <div>
            <AddCount cmp={Count}/>
            {/* <SubCount cmp={Count}/>
            <DisableCount cmp={Count}/> */}
        </div>
    )

}   
 function AddCount(){
      setTimeout((props)=>{
    return <h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>
},2000)
}

// function SubCount(props){
//     const[count,setCount]=useState(0);
//     // return <h2 style={{backgroundColor:"green",width:100}}><props.cmp/></h2>
//     return <button onClick={()=>setCount(count-1)}><props.cmp/>Sub</button>
// }

// function DisableCount(props){
//     return <h2 style={{backgroundColor:"yellow",width:100}}><props.cmp/></h2>
// }

function Count(){
    const[count,setCount]=useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count)}>Add</button>
        </div>
    )
}
