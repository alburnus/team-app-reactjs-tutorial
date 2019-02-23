import React from 'react';

const stylePaddingTop = "paddingTop: 150 + 'px'";

export default class Members extends React.Component {

    render() {
        return (
            <div>
                <div style={{stylePaddingTop}}>
                    <h3>Team members</h3>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.team.teamMembers.map(member =>
                            <tr key={member.id}>
                                <td>
                                    {member.firstName}
                                </td>
                                <td>
                                    {member.lastName}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}