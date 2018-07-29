import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from "./component.login";

import PlanetWrap from "./component.planetWrap";

export default class App extends React.Component {
    constructor(props){
        super(props);   
    }
    render() {
        return(
            <Router>
                <div class="app">
                    <Route exact path="/" component={()=><Login updateUser = {(username, authentic)=>{this.user =  username; this.authenticated = authentic }}/>} />
                    <Route exact path="/planets" component={()=><PlanetWrap user={this.user} authentic = {this.authenticated}/>}/>
                </div>
            </Router>
        );
    }
}