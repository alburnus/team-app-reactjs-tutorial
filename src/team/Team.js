import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TeamDetails from "./TeamDetails";


const API = 'http://localhost:8081/api/team';

export class Team extends React.Component {

    constructor() {
        super();
        this.state = {teams: []}
    }

    // This is lifecycle method which is best to call API and fetch data
    componentDidMount() {
        fetch(API)
            .then(result => result.json())
            .then(teams => this.setState({teams: teams}))
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <h2>Team list</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Team name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.teams.map(team =>
                            <tr>
                                <td key={team.name}>
                                    <Link className="nav-link" to={'/team/detail/' + team.name}>{team.name}</Link>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div>
                        <Route exact path={"/team/detail/:id"} component={TeamDetails}/>
                    </div>
                </div>
            </Router>
        )

    }
}

export default Team;