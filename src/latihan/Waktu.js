import React, {Component} from 'react'

class Waktu extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        var dis = {
            display: this.props.ds
        }
        return(
            <div style={dis}>test</div>
        )
    }
}

export default Waktu