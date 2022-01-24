import React from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'

export default function Rout() {
    return (
        <div>
            <Router>
            {/* <h2>Routing setup</h2> */}
            <Link to="/">Home</Link><br/>
            <Link to="/About">About</Link><br/>
            <Link to="/contact">Contact</Link>

             <Switch>
            <Route path="/"exact={true}><Home/></Route>
            <Route path="/About"><About/></Route>
            <Route path="*"><PageNotFound/></Route>
            </Switch>
            </Router>
        </div>
    )
}

function Home(){
    return <div>
        <h2>Home Page</h2>
        <p>This is home page website</p>
        </div>
}

function About(){
    return <div>
        <h2>About Page</h2>
        <p>This is About page website</p>
        </div>   
}

function PageNotFound(){
    return <div>
        <h2>404 page</h2>
        <p>This page not found</p>
    </div>
}