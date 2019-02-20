import React, {Component} from 'react'

class Navbar extends Component{
    constructor(){
        super()
        this.state ={
            menu: ["contact","about","our product"]
        }
    }

render(){
    return(
        <div class="navbar">
            <h1 class="logoArtace">A R T A C E</h1>

            <div class="navbarmenu">
            <ul>
                {
                    
                    this.state.menu.map(e =>{
                        return e + " "
                    })
                }
            </ul>

            </div>
        </div>
        
    )
}


}

export default Navbar