import React from "react";
import {TextInput} from "../component/TextInput";

const API = 'http://localhost:8081/api/team';

export default class NewTeamForm extends React.Component {

    emptyTeam = {id: "", name: "", teamMembers: []}

    constructor(props) {
        super(props);
        this.state = {team: this.emptyTeam};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            team: {
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.save();
        this.setState({team: this.emptyTeam});
    }

    save() {
        const teamBody = {"id": 0, "name": this.state.team.name, "teamMembers": this.state.team.teamMembers};

        return fetch(API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(
                teamBody
            )
        })
    }

    // https://reactjs.org/docs/forms.html
    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        label="Team name"
                        name="name"
                        value={this.state.team.name}
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="btn btn-success">Create</button>
                </form>
            </div>
        )
    }
}