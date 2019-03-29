import { ADD_TEXT } from "./action-types"


export function addText(payload){
    return{
        type: ADD_TEXT, payload
    }
}

