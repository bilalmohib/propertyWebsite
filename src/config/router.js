import React from "react"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Home from '../Components/Home.jsx'
import Header from '../Components/Header.jsx'
import About from '../Components/About.jsx'

class AppRouter extends React.Component {
    render() {
        return (


                  <Router>
                      <Route exact path="/" component={Home} />
                   
                      <Route exact path="/about" component={About} />
                      
                  </Router>

        )
    }
}
export default AppRouter;