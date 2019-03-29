import React, {Component} from "react"
import { ADD_TEXT } from "./action-types"

var dt = []
//fetch data dari online
fetch("https://api.myjson.com/bins/16uy42")
.then(res => res.json())
.then(data => dt.push(data))

console.log(dt)

const innitialState = {
    text: dt,
    user: [
        {
            username: "fadliselaz",
            city: "jakarta"
        }
    ]
}

function rootReducer(state=innitialState, action){
   
    if(action.type == ADD_TEXT){
        return Object.assign({}, state, {
            text: state.text.concat(action.payload)
        })
    }
    return state
}

export default rootReducer