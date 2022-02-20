import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Gmail from './gmail.png';
import Linkedin from './linkedin.gif';
import Github from './3d-fluency-github.png';
import Twitter from './twitter.gif';
import Ft from './ft.png';


export default function About(){
    



    return(<div className='aboutpage'>
        <Navbar />
        <div className='contactmeat'>
                <div className=''><img className='gmaillogo' src={Gmail} alt="loading..." /></div>
                <div className=''><img className='linkedinlogo' src={Linkedin} alt="loading..." /></div>
                <div className=''><img className='gitlogo' src={Github} alt="loading..." /></div>
                <div className=''><img className='twitterlogo' src={Twitter} alt="loading..." /></div>
        </div>
        <div className='footer'><img className='ftimg' src={Ft} alt='c' /></div>
        
        


    </div>)
}