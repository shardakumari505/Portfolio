import React from 'react';
import classes from './Navbar.module.css';
import Navbar from './Navbar';
import NavLinks from './NavLinks'; 
import {HiOutlineMenu} from 'react-icons/hi';
import {GrClose} from 'react-icons/gr';
import { useState } from 'react';


const NavbarMobile = () =>
{
    
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <HiOutlineMenu className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />

    const closeIcon = <GrClose className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />
    
    
    return(<nav className={classes.NavbarMobile}>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks />}

    </nav>)
}

export default NavbarMobile;