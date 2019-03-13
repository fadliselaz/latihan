import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            user: [],
            msg: ""
        }
    }
    
    componentDidMount(){
        fetch('https://api.myjson.com/bins/eksby')
        .then(res => res.json())
        .then(data => this.setState({user: data}))
    }
    render() {
    
    var user = this.state.user.map(e => (
        <div key={e.id}>
            <ul>
                <li>name: {e.username}</li>
                <li>email: {e.age}</li>
                <li>stay: {e.city}</li>
                <hr />
            </ul>
        </div>
    ))

    return (
      <div>
        <h1>data fetch</h1>
        <br />
        {this.state.msg}
        {user}
      </div>
    )
  }
}
