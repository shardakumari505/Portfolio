import React from 'react';
import './Navbar.css';
import About from './About';


const Navbar = () =>
{
    return(<div className='navbarforall'>
        <div className='namelogo'>sharda.kumari</div>
        <div className='navbarmenu'>
            <div className='navbarmenuabout' href={<About />}>About</div>
            <div className='navbarmenuexperience'>Experience</div>
            <div className='navbarmenuProjects'>Projects</div>
            <div className='navbarmenuextra'>Extra-curricular</div>
            <div className='navbarmenuresume'>Resume</div>
        </div>


    </div>)
}

export default Navbar;