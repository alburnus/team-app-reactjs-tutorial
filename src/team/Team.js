import React from 'react';
import TeamMessage from "./TeamMessage";

export class Team extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Team!!</h1>
                <TeamMessage message='Hi'/>
            </div>
        )
    }
}

export default Team;