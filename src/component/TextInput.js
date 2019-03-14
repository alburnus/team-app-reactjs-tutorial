import React from "react";

export function TextInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" className="form-control" {...props} />
        </div>
    );
}
