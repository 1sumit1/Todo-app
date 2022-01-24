import React from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PageNotFound from './PageNotFound'

export default function Rout1() {
    return (
        <div>
            <Router>
            {/* <h2>Routing setup</h2> */}
            <Nav/>
            <Switch>
            <Route path="/"exact={true}><Home/></Route>
            <Route path="/About"><About/></Route>
            <Route path="*"><PageNotFound/></Route>
            </Switch>
            </Router>
        </div>
    )
}


