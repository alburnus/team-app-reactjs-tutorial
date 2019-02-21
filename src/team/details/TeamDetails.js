import React from 'react';
import Header from "./Header";
import Members from "./Members";

const API = 'http://localhost:8081/api/team';

export class TeamDetails extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Header id={this.props.id}/>
                    <Members/>
                </div>
            </div>
        )
    }
}

export default TeamDetails;