import React from 'react';
import {Link} from "react-router-dom";


const API = 'http://localhost:8080/api/team';

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
                                <Link className="nav-link" to="/team/detail/1">{team.name}</Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Team;