import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <img className="logo" src={"https://th.bing.com/th/id/OIP.5DsWh81sr2LBaNN0JOed8AAAAA?rs=1&pid=ImgDetMain"} alt=""/>

            <ul>
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="/program">Programs</Link></li>
            </ul>

            <button className="btn">contact us </button>
        </nav>
    )
}
export default Navbar;