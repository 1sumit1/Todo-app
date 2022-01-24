import React from 'react'

export default function ArrayList1() {
    const students=[
        {name:"sumit",email:"sumit@gamil.com",contact:98766},
        {name:"amit",email:"amit@gamil.com",contact:92367},
        {name:"pumit",email:"pumit@gamil.com",contact:27666}
    ]
    return (
        <div>
            <h2>Handle Array with List</h2>
            {
                students.map((data)=>
                {
                  <h3>Name is : {data.name}</h3>
                  

                })
            }
            
        </div>
    )
}
