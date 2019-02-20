import React, {Component} from 'react'

class Life extends Component{
    constructor(){
        super()
        this.state = {
            rn: 0,
        }
    }

    getRandomNumber(){
        this.setState({rn: Math.floor(Math.random() * 5)})
        
    }

    reset(){
        this.setState({rn: 0})
    }
    render(){
        return(
            <div class="App-header">
                <h1>Component Life Cycle</h1>
                <button onClick={() => this.getRandomNumber()}>Random Number</button>
                <h3>{this.state.rn}</h3>
                <button onClick={() => this.reset()}>reset</button>
            </div>
        )
    }
}


export default Life