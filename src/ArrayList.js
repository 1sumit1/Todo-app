import React from 'react'

export default function ArrayList() {
    const students=['sumit','amit','naveen','parveen'];

    // students.map((item)=>{
    //     console.log(item);
    // })
    // for(let i=0;i<students.length;i++){
    //     console.log(students[i]);
    // }
    return (
        <div>
           <h2>Handle Array with List</h2> 
           {
                students.map((item)=>{
                    // <h3>Name is : {item}</h3>
                    console.log(item);
                })
            }
           {/* {
               for(let i=0;i<students.length;i++){
                   <h3>My name : {students[i]]</h3>
               }
           } */}
        </div>
    )
}
