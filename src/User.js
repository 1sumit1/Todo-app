import React from 'react'
import {withRouter} from 'react-router-dom'

 function User(props) {
    return (
        <div>
            <h2>Hi this is user id : {props.match.params.id}</h2>
            <h2>user name is : {props.match.params.name}</h2>
        </div>
    )
}

export default withRouter(User)