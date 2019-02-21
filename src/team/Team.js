import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TeamDetails from "./details/TeamDetails";


const API = 'http://localhost:8081/api/team';

export class Team extends React.Component {

    constructor() {
        super();
        this.state = {teams: []}

        this.handleClick = this.handleClick.bind(this);
    }

    // This is lifecycle method which is best to call API and fetch data
    componentDidMount() {
        fetch(API)
            .then(result => result.json())
            .then(teams => this.setState({teams: teams, id: 0}))
    }

    handleClick(id) {
        this.setState({id: id});
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
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.teams.map(team =>
                            <tr key={team.id} onClick={this.handleClick.bind(this, team.id)}>
                                <td>
                                    <Link className="nav-link"
                                          to={'/team/detail/' + team.id}>{team.name}</Link>
                                </td>
                                <td>
                                    <Link className="nav-link"
                                          to={'/team/detail/' + team.id}>{team.teamMembers.length}</Link>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div>
                        {/*https://tylermcginnis.com/react-router-pass-props-to-components/*/}
                        <Route
                            exact
                            path={"/team/detail/:id"}
                            // component={TeamDetails}
                            render={() => <TeamDetails id={this.state.id}/>}
                        />
                    </div>
                </div>
            </Router>
        )

    }
}

export default Team;