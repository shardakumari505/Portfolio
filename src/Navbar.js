import React from 'react';
import NavbarMobile from './NavbarMobile';
import Navigation from './Navigation';
import classes from './Navbar.module.css';


const Navbar = () =>
{
    return(<div className={classes.Navbar}>
        <NavbarMobile />
        <Navigation />
    </div>)
}

export default Navbar;