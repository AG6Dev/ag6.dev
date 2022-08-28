import React from "react";
import logo from "../media/icon.png";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
        <nav>
            <img src={logo} alt="AG6 Icon"/>
            <h1>AG6Dev</h1>
        </nav>
    )
}