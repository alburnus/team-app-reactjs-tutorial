import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import TeamDetails from "./details/TeamDetails";
import {MessageAlert} from "../component/MessageAlert";

const API = 'http://localhost:8081/api/team';

export default class Team extends React.Component {
    constructor() {
        super();
        this.state = {
            teams: [],
            team: {},
            response: {
                type: '',
                showMessage: false
            }
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

    delete(id) {
        fetch(API + "/" + id, {
            method: 'DELETE'
        })
            .then(() => {
                this.setState({
                    response: {
                        type: 'success',
                        showMessage: true
                    }
                });
                fetch(API)
                    .then(result => result.json())
                    .then(teams => this.setState({teams: teams}));
            })
            .catch(() => console.log("Error"));
        this.hideMessage();
    }

    countTeamMembersLength(team) {
        if (team.teamMembers == undefined) {
            return 0;
        }
        return team.teamMembers.length;
    }

    hideMessage() {
        setTimeout(
            function () {
                this.setState({
                    response: {
                        type: '',
                        showMessage: false
                    }
                });
            }
                .bind(this),
            3000
        );
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <MessageAlert show={this.state.response.showMessage} type={this.state.response.type}/>
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
                                    {this.countTeamMembersLength(team)}
                                </td>
                                <td>
                                    {/*bind is very important*/}
                                    <button className="btn btn-primary" type="button"
                                            onClick={this.loadTeam.bind(this, team)}>Details
                                    </button>
                                    <button className="btn btn-danger" type="button"
                                            onClick={this.delete.bind(this, team.id)}>Delete
                                    </button>
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