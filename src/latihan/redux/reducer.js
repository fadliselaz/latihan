import { RAMAL } from "./action-types"

const innitialState = {
    text: ""
}

function rootReducer(state=innitialState, action){
    switch(action.type){
        case RAMAL:
            return state = {
                
                text: action.payload
            }
    }
    return state
}


export default rootReducer