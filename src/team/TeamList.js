import React from 'react';

export default class TeamList extends React.Component {

    constructor(props) {
        super(props);

        this.handleDetail = this.handleDetail.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    countTeamMembersLength(team) {
        if (team.teamMembers == undefined) {
            return 0;
        }
        return team.teamMembers.length;
    }

    handleDetail() {
        this.props.detail(this.props.team)
    }

    handleDelete() {
        this.props.delete(this.props.team.id)
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.team.name}
                </td>
                <td>
                    {this.countTeamMembersLength(this.props.team)}
                </td>
                <td>
                    {/*bind is very important*/}
                    <button className="btn btn-primary" type="button" onClick={this.handleDetail}>
                        Details
                    </button>
                    <button className="btn btn-danger" type="button" onClick={this.handleDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}