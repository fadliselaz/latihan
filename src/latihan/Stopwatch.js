import React, {Component} from 'react'
import Waktu from "./Waktu"

class Stopwatch extends Component {
    constructor(props){
        super(props)
        this.state = {
            clock: 0,
            waktu: 0,
            display: "none"
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.ticker(), 1000)
    }

    ticker(){
        var {start} = this.props
        var clock = Math.round(this.state.clock / 1000)
        this.setState({
            clock: new Date() - start,
            waktu: clock
            
        })

        if(this.state.waktu === 10){
            this.setState({display: "flex"})
        }else if(this.state.waktu === 20){
            this.setState({display: "none"})
        }
        
    }

    reset(){
        window.location.reload()
    }
    
    render(){
        var show = {
            display: this.state.display
        }
        return(
            <div class="header">
                <h1>stop watch</h1>
                <span class="clockSpan">{this.state.waktu}</span>
                <p>Second</p>
                
                <button style={show} onClick={() => this.reset()}>Reset Timer</button>
            </div>
        )
    }
}



export default Stopwatch