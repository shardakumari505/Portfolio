import React from 'react';
import classes from './Navbar.module.css';
import NavLinks from './NavLinks'; 
import {HiOutlineMenu} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';


const NavbarMobile = () =>
{
    
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <HiOutlineMenu className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />

    const closeIcon = <AiOutlineClose className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />
    
    const closeMobileMenu = () => setOpen(false);

    return(<nav className={classes.NavbarMobile}>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}

    </nav>)
}

export default NavbarMobile;