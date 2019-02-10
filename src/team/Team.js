import React from 'react';
import TeamMessage from "./TeamMessage";

export class Team extends React.Component {

    constructor() {
        super();
        this.state = { teams: []}
        this.fetchTeam();
    }

    fetchTeam() {
        fetch('http://localhost:8080/api/team')
            .then(result=>result.json())
            .then(teams=>this.setState({teams}))

    }
    render() {
        return (
            <div className="container">
                <h1>Team!!</h1>
                <TeamMessage message='Hi'/>
                <ul>
                    {this.state.teams.map(team=><li key={team.name}>{team.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Team;