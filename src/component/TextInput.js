import React from "react";

export function TextInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            {/*<input type="text" className="form-control" name={props.name} value={props.value} onChange={props.onChange}/>*/}
            <input type="text" className="form-control" {...props} />
        </div>
    );
}
