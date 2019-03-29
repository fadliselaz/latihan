import React, { Component } from 'react';
import './App.css';
import './animate.css'
import RandomHadiah from './latihan/random'
import Main from "./main"
import Frame from "./latihan/iFrame"
import ReduxTuts from "./latihan/redux/index"
import Axi from "./latihan/axios/axi"


class App extends Component {

  render() {
    return (

        <div className="App">
          <div class="App-header">
            <Axi />
          </div>
          
        </div>
    );
  }
}

export default App;
