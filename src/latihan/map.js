import React, {Component} from 'react'
import DataUser from "./username.js"


class LatihanMap extends Component{
    constructor(){
        super()

        this._username = DataUser.username
        this._location = DataUser.location
        this.state = {
            data: [{
                name: "fadliselaz",
                age: 31
            },{
                name: "sita arlini",
                age: 26
            },{
                name: "cecep hermawans",
                age: 30
            }
        ] 
      }

    }




render(){
    const data = this._location
    return(
        <div class="App-header">
            <ul>
            {
                data.map(e => {
                    return <li>location: {e.city} region: {e.region}</li>
                })
            }
            </ul>
        </div>
    )
}

}




export default LatihanMap