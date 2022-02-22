import React from 'react';
import './Contact.css';
import Gmail from './gmail.png';
import Linkedin from './linkedin.gif';
import Github from './3d-fluency-github.png';
import Twitter from './twitter.gif';

export default function contact(){
    return(<div className='contactdifffiv'>
        <div className='extracurricularpg'>
            <div className='contacttitle'>CONTACT</div>
            <div className='contacttxt'>Up for a Tech talk or would like to contribute together ? Awesome!</div>
            <div className='contactbtndiv'><button className='contactbutton'>Let's Chat</button></div>
        </div>
        <div className='lastdiv'>
            <div className='contactmeatft'>
                <div className='logo1'><img className='gmaillogo' src={Gmail} alt="loading..." /></div>
                <div className='logo1'><img className='linkedinlogo' src={Linkedin} alt="loading..." /></div>
                <div className='logo1'><img className='gitlogo' src={Github} alt="loading..." /></div>
                <div className='logo1'><img className='twitterlogo' src={Twitter} alt="loading..." /></div>
            </div>
            <div className='lastdivitem'></div>
            <div className='namelogoftr'>Sharda Kumari</div>
        </div>
    </div>)
}