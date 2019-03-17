import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import {NewTeam} from "./team/NewTeam";
import {Home} from "./Home";
import {Menu} from "./menu/Menu";
import Team from "./team/Team";

export function App() {
    return (
        <Router>
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/team" component={Team}/>
                <Route exact path="/team/new" component={NewTeam}/>
            </div>
        </Router>
    );
}