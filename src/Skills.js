import React from 'react';
import './Skills.css';
import Navbar from './Navbar';
import Navbarlargescreen from './Navbarlargescreen';
import Ft from './assets/ft.png';
import Cllglogo from './assets/cllglogo.png';
import Schl1logo1 from './assets/schl1logo1.png'
import Schl2logo from './assets/schl2logo.png';


export default function Skills(){
    



    return(<div className='aboutpage'>
        <div className='navbarsmallskill'><Navbar /></div>
        <div className='navbarlargeskill'><Navbarlargescreen /></div>
        
        
        <div className='educationdata'>
            <div className='educationtitle'>EDUCATION</div>
            <div className='educardall'>
                <div className='edu1'>
                    <div className='collegeimg'><img className='collegeimgpic' src={Cllglogo} alt="college" /></div>
                    <div className='educard'>
                        <h1 className='cllgname'>National Institute of Technology , Mizoram</h1>
                        <h2 className='cllgcourse'>Bachelor of Technology in Electronics and Communication Engineering</h2>
                        <h2 className='cllgdate'>DECEMBER 2020 - MAY 2024 (Expected)</h2>
                        <ul>
                            <li>Scored 8.98 CGPA at the end of 6th sem</li>
                            {/* <li>Scored 9.00 CGPA at the end of 5th sem</li>
                            <li>Scored 9.30 CGPA at the end of 4th sem</li>
                            <li>Scored 9.50 CGPA in 3rd sem</li>
                            <li>Scored 9.52 CGPA in 2nd sem</li>
                            <li>Scored 9.59 CGPA in 1st sem</li> */}
                        </ul>
                    </div>
                    </div>
                <div className='linebreak'></div>
            </div>
            <div className='educardall'>
                <div className='edu1'>
                    <div className='collegeimg'><img className='collegeimgpic' src={Schl1logo1} alt="college" /></div>
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
            <div className='skilltitle'>SKILLS</div>
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
                    <div className='lang'>Express</div>
                    <div className='langcskex'></div>
                    <div className='lang'>Azure</div>
                    <div className='langcskpi'></div>
                    <div className='lang'>Terraform</div>
                    <div className='langcskhooks'></div>
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
                    <div className='lang'>MongoDB</div>
                    <div className='langcskmongo'></div>
                    <div className='lang'>Arduino</div>
                    <div className='langcskard'></div>
                    <div className='lang'>Proteus</div>
                    <div className='langcskprt'></div>
                    <div className='lang'>Multisim</div>
                    <div className='langcskmi'></div>
                    <div className='lang'>Docker</div>
                    <div className='langcskboot'></div>
                </div>
            </div>
        </div>
        <div className='footer'><img className='ftimg' src={Ft} alt='c' /></div>
        
        


    </div>)
}
