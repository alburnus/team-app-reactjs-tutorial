import React from "react";
import {MenuElements} from "./MenuElements";

export function Menu() {
    return (
        // In React instead of html "class" we write "className"
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <MenuElements/>
            </div>
        </nav>
    )
}
