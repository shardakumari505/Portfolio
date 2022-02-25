import {motion} from 'framer-motion';

const NavLinks = (props) => {
    return(
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()} >
                <a href="/#Skills">About</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()} >
                <a href="/#Projects">Projects</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()} >
                <a href="/#Experience">Experience</a>
            </li>
        </ul>
    )
}

export default NavLinks;