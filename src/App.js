import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Team from "./team/Team";
import NewTeam from "./team/NewTeam";
import Home from "./Home";
import TeamDetails from "./team/Details";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/team">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/team/new">New team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/team/detail/1">Team 1</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/team" component={Team}/>
                    <Route exact path="/team/new" component={NewTeam}/>
                    <Route path={"/team/detail/:id"} component={TeamDetails}/>
                </div>
            </Router>
        );
    }
}

export default App;
