import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div>
             <Link to="/">Home</Link><br/>
            <Link to="/About">About</Link><br/>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}
