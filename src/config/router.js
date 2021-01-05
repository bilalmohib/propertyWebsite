import React from "react"
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Home from '../Components/Home.jsx';
import Search from '../Components/Search';
import AdDetails from '../Components/AdDetails';
import Admin from '../Components/Admin';

class AppRouter extends React.Component {
    render() {
        return (


                  <Router>
                      <Route exact path="/" component={Home} />
                   
                      <Route exact path="/search" component={Search} />
                      
                      <Route exact path="/details" component={AdDetails} />  


                      <Route exact path="/admin" component={Admin} />  


                  </Router>

        )
    }
}
export default AppRouter;