import React from "react"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Home from '../Components/Home.jsx';
import Search from '../Components/Search';

class AppRouter extends React.Component {
    render() {
        return (


                  <Router>
                      <Route exact path="/" component={Home} />
                   
                      <Route exact path="/search" component={Search} />
                      
                  </Router>

        )
    }
}
export default AppRouter;