import React, {Component} from 'react'

class ArtaceLogo extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){

        var dis = {
            display: this.props.ds
        }
        return(
            <div style={dis}>
                <div>
                <img src={require("./img/logoArtace.png")} class="App-logo" />

                <h3>Mengocok...</h3>
                </div>
            </div>
        )
    }
}

export default ArtaceLogo