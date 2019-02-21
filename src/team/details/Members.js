import React from 'react';

const stylePaddingTop = "paddingTop: 150 + 'px'";

export default class Members extends React.Component {
    render() {
        return (
            <div>
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
                        <tr>
                            <td>
                                B
                            </td>
                            <td>
                                A
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}