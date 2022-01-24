import React,{useState,useMemo} from 'react'

export default function UseMemo() {
    const[count,setCount]=useState(0);
    const[data,setData]=useState(10);

   const MultiCountMemo=useMemo( function MultiCount(){
    console.log("MultiCount");
    return count*5;
},[count])
    return (
        <div>
            <h2>UseMemo Hooks</h2>
            <h3>{count}</h3>
            <h3>{data}</h3>
            <h3>{MultiCountMemo}</h3>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData(data+10)}>Update Data</button>
        </div>
    )
}
