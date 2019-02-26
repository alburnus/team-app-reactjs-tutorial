import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import TeamDetails from "./details/TeamDetails";
import {MessageAlert} from "../component/MessageAlert";
import {TeamRowHeader} from "./TeamRowHeader";

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
        this.fetchAll();
    }

    fetchAll() {
        fetch(API)
            .then(result => result.json())
            .then(teams => this.setState({teams: teams}))
    }

    showTeamDetail(teamToLoad) {
        this.setState({team: teamToLoad});
    }

    countTeamMembersLength(team) {
        if (team.teamMembers == undefined) {
            return 0;
        }
        return team.teamMembers.length;
    }

    delete(id) {
        fetch(API + "/" + id, {
            method: 'DELETE'
        })
            .then(() => {
                this.setResponseState('success', true)
                this.fetchAll();
            })
            .catch(() => this.setResponseState('danger', true));
        this.hideMessage();
    }

    hideMessage() {
        setTimeout(
            function () {
                this.setResponseState('', false);
            }
                .bind(this),
            3000
        );
    }

    setResponseState(type, showMessage) {
        this.setState({
            response: {
                type: type,
                showMessage: showMessage
            }
        });
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <MessageAlert show={this.state.response.showMessage} type={this.state.response.type}/>
                    <h2>Team list</h2>
                    <table className="table table-striped">
                        <thead>
                        <TeamRowHeader/>
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
                                            onClick={this.showTeamDetail.bind(this, team)}>Details
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