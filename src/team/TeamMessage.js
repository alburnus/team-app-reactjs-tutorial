import React from 'react';

export class TeamMessage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Team message : {this.props.message} </h1>
            </div>
        )
    }
}

export default TeamMessage;