import React from 'react';
import './Navbar.css';
import Skills from './Skills';


const Navbar = () =>
{
    return(<div className='navbarpg'>
        <div className='navbarforall'>
            <div className='namelogo'>Sharda Kumari</div>
            <div className='navbarmenu'>
                <div className='navbarmenuabout' href="#Skills">About</div>
                <div className='navbarmenuProjects'>Projects</div>
                <div className='navbarmenuexperience'>Experience</div>
                <div className='navbarmenuextra'>Extra-curricular</div>
                <div className='navbarmenuresume'>Resume</div>
            </div>
        </div>


    </div>)
}

export default Navbar;