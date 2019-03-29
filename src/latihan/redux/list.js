import React from "react"
import { connect } from "react-redux"

const mapStateToProps = (state) =>{
    return{user: state.user}
}

const connectedList = ({user}) => (
    <ul>
        {user.map(el => (
            <li>
            username: {el.username} <br />
            password: {el.city}
            </li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(connectedList)
export default List