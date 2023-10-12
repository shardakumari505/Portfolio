import './Navigation.css';
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className={classes.Navigation}>
            <div className='namelogo'><Link className="navlinkmenu1" to="/">Sharda Kumari</Link></div>
            {/* <NavLinks /> */}
        </nav>
        
    )
}

export default Navigation;