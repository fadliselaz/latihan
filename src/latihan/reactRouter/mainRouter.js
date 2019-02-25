import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Survey from "../Survey"

const MainRouter = () => {
    return(
        <Router>
            <div>

                <ul>
                    {/* ini adalah TRIGERnya */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topic">Topic</Link>
                    </li>
                </ul>


            {/* INi adalah proses routenya */}

            <Route exact path="/" component={Home} />
            <Route  path="/about" component={Survey} />
            <Route  path="/topic" component={Topic} />

            </div>
        </Router>
    )
}


// ini adalah component yang akan di panggil

 const Home = () => {
     return(
         <div>
             This is Home
         </div>
     )
 }
 const About = () => {
     return(
         <div>
             This is About
         </div>
     )
 }
 const Topic = () => {
     return(
         <div>
             This is Topic
         </div>
     )
 }
  


export default MainRouter