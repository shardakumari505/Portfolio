import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Gmail from './gmail.png';
import Linkedin from './linkedin.gif';
import Github from './3d-fluency-github.png';
import Twitter from './twitter.gif';
import Me from './me.png';
import Ft from './ft.png';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Home(){
    const textRef = useRef();

useEffect( () =>{
    init(textRef.current,{
        showCursor:true,
        backDelay:1500,
        backspeed:60,
        strings:["Machine Learning Practitioner", "Web Developer"]
    });
},[]);

    return(<div className='homepage'>
        <Navbar />
        <div className='profiletop'>
            <div className='profilepic'><img className='profilepicimg' src={Me} alt='profile' /></div>
            <div className='profileright'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Sharda Kumari</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                    <div className="profilebtn"><button className='hirebutton'>Hire Me</button></div>
                </div>
            </div>
        </div>
        <div className='aboutmesection'>
            <div className='aboutmetitle'>About</div>
            <div className='aboutmetext'>I am a crazy Technology Enthusiast, passionate about AI and Machine Learning, and possess the zeal to explore Full stack development. I am currently pursuing my Bachelor of Technology in Electronics and Communication Engineering from NIT Mizoram. I am also working on many projects in web development(using Javascript/ReactJS/NodeJS and some other libraries and frameworks) and Machine Learning using Python (A good grasp of Analysis) and looking forward to learn and work on many more cool technologies.<br></br><br></br>I love to portray the world in a frame with my painting skills and sometimes escape to the world of books. Can’t restrain me from capturing the eyeful even though lacks photography skills.
            </div>
        </div>
        <div className='contactmeat'>
                <div className='logo'><img className='gmaillogo' src={Gmail} alt="loading..." /></div>
                <div className='logo'><img className='linkedinlogo' src={Linkedin} alt="loading..." /></div>
                <div className='logo'><img className='gitlogo' src={Github} alt="loading..." /></div>
                <div className='logo'><img className='twitterlogo' src={Twitter} alt="loading..." /></div>
        </div>
        <div className='footer'><img className='ftimg' src={Ft} alt='c' /></div>
        


    </div>)
}

