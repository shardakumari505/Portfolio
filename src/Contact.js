import React from 'react';
import './Contact.css';
import Gmail from './assets/gmail.png';
import Linkedin from './assets/linkedin.gif';
import Github from './assets/3d-fluency-github.png';
import Twitter from './assets/twitter.gif';


export default function contact(){
    return(<div className='contactdifffiv'>
        <div className='extracurricularpg'>
            <div className='contacttitle'>CONTACT</div>
            <div className='contacttxt'>Up for a Tech talk or would like to contribute together ? Fabulous!</div>
            <div className='contactbtndiv'><button className='contactbutton'><a className='buttona' href="mailto:shardakumari505@gmail.com">Connect</a></button></div>
        </div>
        <div className='lastdiv'>
            <div className='contactmeatft'>
                <a href="mailto:bt20ec001@nitmz.ac.in"><div className='logo1'><img className='gmaillogo' src={Gmail} alt="loading..." /></div></a>
                <a href="https://www.linkedin.com/in/sharda-k-359592201/"><div className='logo1'><img className='linkedinlogo' src={Linkedin} alt="loading..." /></div></a>
                <a href="https://github.com/shardakumari505"><div className='logo1'><img className='gitlogo' src={Github} alt="loading..." /></div></a>
                <a href="https://twitter.com/sharda9_singh"><div className='logo1'><img className='twitterlogo' src={Twitter} alt="loading..." /></div></a>
            </div>
            <div className='lastdivitem'></div>
            <div className='namelogoftr'>Sharda Kumari</div>
        </div>
    </div>)
}