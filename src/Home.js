import React from 'react';
import './Home.css';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import Navbarlargescreen from './Navbarlargescreen';
import Gmail from './assets/gmail.png';
import Linkedin from './assets/linkedin.gif';
import Github from './assets/3d-fluency-github.png';
import Twitter from './assets/twitter.gif';
import Me from './assets/me.png';
import Ft from './assets/ft.png';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Home(){
    const textRef = useRef();

useEffect( () =>{
    init(textRef.current,{
        showCursor:true,
        backDelay:1500,
        backspeed:60,
        strings:["Machine Learning Practitioner","DevOps Enthusiast", "Web Developer"]
    });
},[]);

    return(<div className='homepage'>
        <div className='navbarsmall'><Navbar /></div>
        <div className='navbarlarge'><Navbarlargescreen /></div>
        
        <div className='profiletop'>
            <div className='profilepic'><img className='profilepicimg' src={Me} alt='profile' /></div>
            <div className='profileright'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Sharda Kumari</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                    <div className="profilebtn"><button className='hirebutton'><a className='buttonah' href="mailto:bt20ec001@nitmz.ac.in">Hire Me</a></button></div>
                </div>
            </div>
        </div>
        <div className='aboutmesection'>
            <div className='aboutmetitle'>ABOUT</div>
            <div className='aboutmetext'>I am a crazy Technology Enthusiast, passionate about AI and Machine Learning, and possess the zeal to explore Full stack development. I am currently pursuing my Bachelor of Technology in Electronics and Communication Engineering from NIT Mizoram. I am also working on many projects in web development(using Javascript/ReactJS/NodeJS and some other libraries and frameworks) and Machine Learning using Python (A good grasp of Analysis) and looking forward to learn and work on many more cool technologies.<br></br><br></br>I love to portray the world in a frame with my painting skills and sometimes escape to the world of books. Can’t restrain me from capturing the eyeful even though lacks photography skills.
            </div>
        </div>
        <div className='contactmeat'>
                <a href="mailto:bt20ec001@nitmz.ac.in"><div className='logo1'><img className='gmaillogo1' src={Gmail} alt="loading..." /></div></a>
                <a href="https://www.linkedin.com/in/sharda-k-359592201/"><div className='logo1'><img className='linkedinlogo1' src={Linkedin} alt="loading..." /></div></a>
                <a href="https://github.com/shardakumari505"><div className='logo1'><img className='gitlogo1' src={Github} alt="loading..." /></div></a>
                <a href="https://twitter.com/sharda9_singh"><div className='logo1'><img className='twitterlogo1' src={Twitter} alt="loading..." /></div></a>
        </div>
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <div className='footer'><img className='ftimg' src={Ft} alt='c' /></div>
        


    </div>)
}

