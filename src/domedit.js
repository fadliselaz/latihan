import React, {Component} from 'react'

class DomEdit extends Component{
    constructor(){
        super()
        this.state = {
            text: "hello"
        }
    }

edit(){
    // var e = this.refs.h1
    // this.setState({text: "you click it..!!"})
    this.setState({
        text: ""
    })
    
    this.refs.hide.style.display = "block"
    setTimeout(() =>{
        this.refs.hide.style.display = "none"
        this.setState({text: "hello"})
    },1000)
}

 

render(){

     const divStyle = {
        display: "none"
}
    return(
        <div>
            <h1 ref="h1" onMouseOver={() => this.edit()}>{this.state.text}</h1>
            <h1 ref="hide" style={divStyle}>now you see me..</h1>
        </div>
    )
}

}

export default DomEdit