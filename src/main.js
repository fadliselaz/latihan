import React, {Component} from 'react'
import Survey from "./latihan/Survey"
import MainRouter from "./latihan/reactRouter/mainRouter"

class Main extends Component{
    constructor(){
        super()
        
    }


    render(){
        return(
            <div>
                <MainRouter />
            </div>
        )
    }
}

export default Main