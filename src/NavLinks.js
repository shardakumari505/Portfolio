import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

const NavLinks = (props) => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: -40}
    return(
        
        <ul>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.05}}
            onClick={() => props.isMobile && props.closeMobileMenu()} >
                <Link to="/about">About</Link>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()} >
                <a href="/#Projects">Projects</a>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()} >
                <a href="/#Experience">Experience</a>
            </motion.li>
        </ul>
    )
}

export default NavLinks;