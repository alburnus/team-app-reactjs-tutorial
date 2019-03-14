import React from "react";
import {Link} from "react-router-dom";

export function Element(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.path}>
                {props.name}
            </Link>
        </li>
    )
}