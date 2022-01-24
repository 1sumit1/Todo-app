import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
export default function DynamicRouting() {
    let users=[
        {id : 11, name:"sumit",email:"sumit@gmail.com"},
        {id : 22, name:"amit",email:"amit@gmail.com"},
        {id : 33, name:"kapil",email:"kapil@gmail.com"},
        {id : 44, name:"mohit",email:"mohit@gmail.com"}
    ]
    return (
        <div>
            <Router>
            <h2>React Dynamic Routing</h2>
            {
                users.map((item)=>
                <div><Link to={"/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link></div>
                )
            }
            <Route path="/user/:id/:name"><User/></Route>
            </Router>
        </div>
    )
}
