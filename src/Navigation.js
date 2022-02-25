import NavLinks from './NavLinks';
import './Navigation.css';
import classes from './Navbar.module.css';

const Navigation = () => {
    return(
        <nav className={classes.Navigation}>
            <div className='namelogo'>Sharda Kumari</div>
            <NavLinks />
        </nav>
        
    )
}

export default Navigation;