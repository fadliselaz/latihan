import React, { Component } from 'react';
import axios from "axios"



class Axi extends Component {

    state = {
        user : []
    }


    componentDidMount = () => {
      axios.get("https://api.myjson.com/bins/eksby")
      .then(res => {
          const dataUser = res.data
          this.setState({ user: dataUser })
      })
    }

    render() {
        return (
            <div>
                
                {
                    this.state.user.map(e => (
                        <div key={e.id}>
                            <li>{e.username}</li>
                            <li>{e.age}</li>
                            <li>{e.city}</li>

                        </div>
                    ))
                }
                
            </div>
        );
    }
}

export default Axi;
