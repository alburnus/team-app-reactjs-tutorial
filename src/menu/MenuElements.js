import React from "react";
import {Element} from "./Element";

export function MenuElements(props) {
    return (
        <ul className="navbar-nav">
            <Element name="Home" path="/"/>
            <Element name="Team" path="/team"/>
            <Element name="Add team" path="/team/new"/>
        </ul>

    )
}