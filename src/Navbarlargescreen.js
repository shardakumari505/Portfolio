import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbarlargescreen = () =>{
    return(<div className="navbarpg">
        <div className="navbarforall">
            <div className="namelogo">Sharda Kumari</div>
            <div className="navbarmenu">
                <div className=""><Link to="/about">About</Link></div>
                <div className="">Experience</div>
                <div className="">Projects</div>

            </div>

        </div>

    </div>)
}

export default Navbarlargescreen;