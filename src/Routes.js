import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import NavBarPage from "./NavBarPage";

class Routes extends Component{
    render(){
        return (            
                    <div>                    
            <Router>
                    <NavBarPage />
                    <hr/>
                    <Route name="Home" exact path="/" component={HomePage} />
                    <Route name="About" eaxct path="/menu" component={AboutPage} />
                    <Route name="Menu" exact path="/about" component={MenuPage} />
                </Router>
            </div>
        )
    }
}

export default Routes;