import React from 'react';

const stylePaddingTop = "paddingTop: 150 + 'px'";

export default class Members extends React.Component {

    render() {
        return (
            <div>
                Team id (from routing path): {this.props.team.name}
                Team id (from routing path): {this.props.mem.map(function(vale){
                    console.log(vale);
            })}
                <div style={{stylePaddingTop}}>
                    <h2>Team members</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/*{this.props.members.map(member =>*/}
                            {/*<tr key={member.id}>*/}
                                {/*<td>*/}
                                    {/*{member.firstName}*/}
                                {/*</td>*/}
                                {/*<td>*/}
                                    {/*{member.lastName}*/}
                                {/*</td>*/}
                            {/*</tr>*/}
                        {/*)}*/}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}