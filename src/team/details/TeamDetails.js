import React from 'react';
import Header from "./Header";
import Members from "./Members";


export default class TeamDetails extends React.Component {

    componentWillMount() {
    }

    // https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9
    // DOM manipulations, network requests, etc.
    componentDidUpdate() {
    }

    render() {
        if (this.props.team.id === undefined) {
            return null;
        } else {
            return (
                <div>
                    <div className="container">
                        <Header team={this.props.team}/>
                        <Members team={this.props.team}/>
                    </div>
                </div>
            )
        }
    }
}
