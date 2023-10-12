import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbarlargescreen extends React.Component{

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbarpg").className = "navbarpg scroll";
    } else {
      document.querySelector(".navbarpg").className = "navbarpg";
    }
  };
     
  render(){
    return(<div className="navbarpg">
        <div className="navbarforall">
            <div className="namelogo"><Link className="navlinkmenu" to="/">Sharda Kumari</Link></div>
            <div className="navbarmenu">
                <div className=""><Link className="navlinkmenu" to="/skills">About</Link></div>
                <div className=""><Link className="navlinkmenu" to="/Experience">Experience</Link></div>
                <div className=""><Link className="navlinkmenu" to="/Projects">Projects</Link></div>
                <a className="navlinkmenu" href="https://drive.google.com/file/d/14VzNcO8SQEpADcUh5RsaIiMyqZFFh0sg/view?usp=sharing"><div className="">Resume</div></a>
                
            </div>

        </div>
        
    </div>)
  }  
  
    
}

export default Navbarlargescreen;
