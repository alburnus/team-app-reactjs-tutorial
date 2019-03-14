import React from "react";
import {Element} from "./Element";

export function MenuElements() {
    return (
        <ul className="navbar-nav">
            <Element name="Home" path="/"/>
            <Element name="Add team" path="/team/new"/>
            <Element name="Teams" path="/team"/>
        </ul>

    )
}