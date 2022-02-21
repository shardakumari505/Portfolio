import React from 'react';
import './Skills.css';
import Navbar from './Navbar';
import Gmail from './gmail.png';
import Linkedin from './linkedin.gif';
import Github from './3d-fluency-github.png';
import Twitter from './twitter.gif';
import Ft from './ft.png';
import Cllglogo from './cllglogo.png';
import Schl1logo from './schl1logo.png';
import Schl2logo from './schl2logo.png';


export default function Skills(){
    



    return(<div className='aboutpage'>
        <Navbar />
        <div className='contactmeat'>
                <div className=''><img className='gmaillogo' src={Gmail} alt="loading..." /></div>
                <div className=''><img className='linkedinlogo' src={Linkedin} alt="loading..." /></div>
                <div className=''><img className='gitlogo' src={Github} alt="loading..." /></div>
                <div className=''><img className='twitterlogo' src={Twitter} alt="loading..." /></div>
        </div>
        <div className='educationdata'>
            <div className='educationtitle'>Education</div>
            <div className='educardall'>
                <div className='edu1'>
                    <div className='collegeimg'><img className='collegeimgpic' src={Cllglogo} alt="college" /></div>
                    <div className='educard'>
                        <h1 className='cllgname'>National Institute of Technology , Mizoram</h1>
                        <h2 className='cllgcourse'>Bachelor of Technology in Electronics and Communication Engineering</h2>
                        <h2 className='cllgdate'>DECEMBER 2020 - MAY 2024 (Expected)</h2>
                        <ul>
                            <li>Scoring 9.46 CGPA , withheld 2nd position in the Branch in 1st sem</li>
                            <li>Scoring 9.48 CGPA , withheld 2nd position in the Branch in 2nd sem</li>
                            <li>Scoring 9.47 CGPA , withheld 1st position in the Branch in 3rd sem</li>
                        </ul>
                    </div>
                    </div>
                <div className='linebreak'></div>
            </div>
            <div className='educardall'>
                <div className='edu1'>
                    <div className='collegeimg'><img className='collegeimgpic' src={Schl1logo} alt="college" /></div>
                    <div className='educard'>
                        <h1 className='cllgname'>DAV Public School , Bokaro</h1>
                        <h2 className='cllgcourse'>XII</h2>
                        <h2 className='cllgdate'>JUNE 2016 - MARCH 2018</h2>
                        <ul>
                            <li>Scored 81.2% in 12th Board</li>
                            <li>Physics , Chemistry , Biology and Mathematics as the main subject</li>
                            <li>CBSE Boards</li>
                        </ul>
                    </div>
                </div>
                <div className='linebreak'></div>
            </div>
            <div className='educardall'>
                <div className='edu1'>
                    <div className='schl2img'><img className='schl2imgpic' src={Schl2logo} alt="college" /></div>
                    <div className='educard'>
                        <h1 className='cllgname'>St. Joseph's School , Dumka</h1>
                        <h2 className='cllgcourse'>X</h2>
                        <h2 className='cllgdate'>MARCH 2016</h2>
                        <ul>
                            <li>Scored 91.4% in 10th Board</li>
                            <li>Computer Application</li>
                            <li>CISCE Boards</li>
                        </ul>
                    </div>
                </div>
                <div className='linebreak'></div>
            </div>
            
        </div>
        <div className='skilldata'>
            <div className='skilltitle'>Skills</div>
            <div className='skillleftright'>
                <div className='skillleft'>
                    <div className='lang'>C</div>
                    <div className='langcskc'></div>
                    <div className='lang'>Java</div>
                    <div className='langcskjava'></div>
                    <div className='lang'>Python</div>
                    <div className='langcskpy'></div>
                    <div className='lang'>HTML</div>
                    <div className='langcskhtml'></div>
                    <div className='lang'>CSS</div>
                    <div className='langcskcss'></div>
                    <div className='lang'>Javascript</div>
                    <div className='langcskjs'></div>
                    <div className='lang'>Bootstrap</div>
                    <div className='langcskboot'></div>
                    <div className='lang'>Git</div>
                    <div className='langcskgit'></div>
                </div>
                <div className='skillright'>
                    <div className='lang'>ReactJS</div>
                    <div className='langcskreact'></div>
                    <div className='lang'>Redux</div>
                    <div className='langcskredux'></div>
                    <div className='lang'>Hooks</div>
                    <div className='langcskhooks'></div>
                    <div className='lang'>NodeJS</div>
                    <div className='langcsknode'></div>
                    <div className='lang'>Power BI</div>
                    <div className='langcskpi'></div>
                    <div className='lang'>Multisim</div>
                    <div className='langcskmi'></div>
                    <div className='lang'>Arduino</div>
                    <div className='langcskard'></div>
                    <div className='lang'>Proteus</div>
                    <div className='langcskprt'></div>
                </div>
            </div>
        </div>
        <div className='footer'><img className='ftimg' src={Ft} alt='c' /></div>
        
        


    </div>)
}