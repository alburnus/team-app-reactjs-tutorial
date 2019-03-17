import React from "react";

export function MessageAlert(props) {
    let className = "alert alert-" + props.type;

    if (props.show === true) {
        return (
            <div className={className} role="alert">
                {props.message}
            </div>
        );
    }
    return (
        <div className="alert alert-light" role="alert">
            &nbsp;
        </div>
    );
}
