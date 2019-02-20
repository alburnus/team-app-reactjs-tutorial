import React from "react";

const API = 'http://localhost:8081/api/team';

export default class NewTeamForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        this.save();
        event.preventDefault();
        this.setState({name: ''});
    }

    save() {
        return fetch(API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
            })
        })
    }

    // https://reactjs.org/docs/forms.html
    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Team name
                        <input type="text" value={this.state.name} className="form-control"
                               onChange={this.handleChange}/>
                    </label>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
        )
    }
}