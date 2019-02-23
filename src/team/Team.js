import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import TeamDetails from "./details/TeamDetails";

const API = 'http://localhost:8081/api/team';

export default class Team extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: [],
            team: {}
        }
    }

    componentDidMount() {
        fetch(API)
            .then(result => result.json())
            .then(teams => this.setState({teams: teams}))
    }

    loadTeam(teamToLoad) {
        this.setState({team: teamToLoad});
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
                            <th scope="col">Team size</th>
                            <th scope="col">Operations</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.teams.map(team =>
                            <tr key={team.id}>
                                <td>
                                    {team.name}
                                </td>
                                <td>
                                    {team.teamMembers.length}
                                </td>
                                <td>
                                    {/*bind is very important*/}
                                    <button className="btn btn-primary" type="button" onClick={this.loadTeam.bind(this, team)}>Details</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div>
                        <TeamDetails team={this.state.team}/>
                    </div>
                </div>
            </Router>
        )
    }
}