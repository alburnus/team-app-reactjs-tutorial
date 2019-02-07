import React from 'react';

export class TeamDetails extends React.Component {
    render() {
        return (
            <h1>Team detail: {this.props.match.params.id}</h1>
        )
    }
}

export default TeamDetails;