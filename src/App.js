import React, { Component } from 'react';
import './App.css';
import './animate.css'
import Main from "./main"
import ArtaceLogo from "./latihan/artaceLogo"
import MainRouter from "./latihan/reactRouter/mainRouter"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <div class="App-header">

            {/* < Main /> */}
            <MainRouter />



          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
