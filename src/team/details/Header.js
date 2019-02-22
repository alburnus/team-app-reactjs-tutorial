import React from 'react';

const styleMarginTop = "marginTop: 150 + 'px'";

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <div style={{styleMarginTop}}>
                    <h2>Details</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Team id (from routing path): {this.props.team.id}</li>
                        <li className="list-group-item">Team name: {this.props.team.name}</li>
                    </ul>
                </div>
            </div>
        )
    }

}