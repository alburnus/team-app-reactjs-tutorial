import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import TeamDetails from "./details/TeamDetails";
import {MessageAlert} from "../component/MessageAlert";
import {TeamRowHeader} from "./TeamRowHeader";
import TeamList from "./TeamList";

const API = 'http://localhost:8081/api/team';

export default class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            team: {},
            response: {
                type: '',
                showMessage: false
            }
        }
        this.showTeamDetail = this.showTeamDetail.bind(this);
        this.delete = this.delete.bind(this);
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
        if (this.state.team == undefined || this.state.team.id != teamToLoad.id) {
            this.setState({team: teamToLoad});
        } else {
            this.setState({team: {}});
        }

    }

    delete(id) {
        fetch(API + "/" + id, {
            method: 'DELETE'
        })
            .then(() => {
                this.setResponseState('success', true, 'Deleted team with id:' + id)
                this.fetchAll();
            })
            .catch(() => this.setResponseState('danger', true, "Can not delete team with id:" + id));
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

    setResponseState(type, showMessage, message) {
        this.setState({
            response: {
                type: type,
                showMessage: showMessage,
                message: message
            }
        });
    }

    render() {
        return (
                <div className="container">
                    <MessageAlert show={this.state.response.showMessage} type={this.state.response.type} message={this.state.response.message}/>
                    <h2>Team list</h2>
                    <table className="table table-striped">
                        <thead>
                        <TeamRowHeader/>
                        </thead>
                        <tbody>
                        {this.state.teams.map(team =>
                            <TeamList
                                key={team.id}
                                team={team}
                                detail={this.showTeamDetail}
                                delete={this.delete}
                            />
                        )}
                        </tbody>
                    </table>
                    <div>
                        <TeamDetails team={this.state.team}/>
                    </div>
                </div>
        )
    }
}