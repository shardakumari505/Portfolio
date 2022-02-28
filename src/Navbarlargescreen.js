import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbarlargescreen = () =>{
    return(<div className="navbarpg">
        <div className="navbarforall">
            <div className="namelogo"><Link className="navlinkmenu" to="/">Sharda Kumari</Link></div>
            <div className="navbarmenu">
                <div className=""><Link className="navlinkmenu" to="/skills">About</Link></div>
                <div className=""><Link className="navlinkmenu" to="/Experience">Experience</Link></div>
                <div className=""><Link className="navlinkmenu" to="/Projects">Projects</Link></div>

            </div>

        </div>

    </div>)
}

export default Navbarlargescreen;