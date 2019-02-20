import React, {Component} from 'react'
import "./animate.css"
import DomEdit from "./domedit.js"

class FormInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "form",
            input: "",
            dom: true
            
        }
    }

    oc(e) {
    
        var x = this.refs.refInput.value
        var y = `kamu mencari kata kunci ${x}`
        var z = `kata kunci ${x} ditemukan..`
        
        if(x === ""){
            alert("kamu tidak memasukan kata kunci..")
        }else{
            alert(y)
            alert(z)
            
        }
        
        this.refs.refInput.value = ""
    }

    
    render(){
        var devy = {
            padding: "10px",
            margin: "5px",
            borderColor: "white",
            border: "2px",
            borderRadius: "2px"
        }

        var buty = {
            padding: "10px",
            backgroundColor: "purple",
            border: "2px",
            fontSize: "16px",
            color: "white",
            borderRadius: "2px",

        }
        var adom = {
            display: "none"
        }

        return(
            <div class="App-header">
                
                <div>
                <DomEdit /> 
                <input ref="refInput" type="text" style={devy} />
                <button class="bt animated infinite pulse" ref="refButton" style={buty} onClick={() => this.oc()}>{this.props.msg}</button>
                </div>
                
            </div>
        )
    }
}


export default FormInput