import React from 'react';
import './Experience.css';
import Vaguss from './vaguss.jpg';
import Hh from './hh.jpg';
import Is from './is.jfif';
import Shaastra from './shaastra.jpg';
import Moodi from './moodi.jpg';
import Microsoft from './Microsoft.png';
import Technosys from './Technosys.png';
import Quintessential from './Quintessential.png';
import Tantrafiesta from './Tantrafiesta.png';
import Ideeavolt from './Ideeavolt.png';
import Upflairs from './Upflairs.png';
import Jigserate from './Jigserate.png';
import Chimera from './chimera.png';
import Aws from './aws.png';
import Nitc from './nitc.jpg';
import Navbar from './Navbar';
import Navbarlargescreen from './Navbarlargescreen';

export default function Experience(){

    return(<div className='experiencepg'>
            <div className='navbarsmallexperience'><Navbar /></div>
            <div className='navbarlargeexperience'><Navbarlargescreen /></div>
            <div className='experiencepagehome'>
                <div className='exptitle'>Work Experience</div>
                <div className='exp1'>
                    <div className='exp1img'><img className='hh1img' src={Vaguss} alt="Henry Harvin" /></div>
                    <div className='exp1desc'>
                        <div className='exp1role'>Web Developer</div>
                        <div className='exp1company'>Vaguss</div>
                        <div className='exp1date'>(Jan 2022 - Present)</div>
                        <ol className='exp1exp'>
                            <li>Developing user-friendly webpage using Javascript , CSS and React.js. Working mainly on the frontend part for attractive responses.</li>
                        </ol>
                    </div>
                </div>
                <div className='exp2'>
                    <div className='exp2img'><img className='hh2img' src={Hh} alt="Henry Harvin" /></div>
                    <div className='exp2desc'>
                        <div className='exp2role'>Analytics Intern</div>
                        <div className='exp2company'>Henry Harvin Education</div>
                        <div className='exp2date'>(Jun 2021 - Sept 2021)</div>
                        <ol className='exp2exp'>
                            <li>Completed 4 projects in 3 months time with 2 machine learning models.Lead a team of 6 members in 4thproject and presented the project on 8thday to the mentor.</li>
                            <li>Data Collection using pandas , scrapy and beautiful soup , Data cleaning , Analysis , ML model(ARIMA) , Data Visulaization using powerBI and Report of theProject.</li>
                        </ol>
                    </div>
                </div>
                <div className='voltitle'>Extra-Curricular</div>
                <div className='vol1'>
                    <div className='vol1img'><img className='vol1imgpic' src={Shaastra} alt="Henry Harvin" /></div>
                    <div className='vol1desc'>
                        <div className='vol1role'>Campus Ambassador</div>
                        <div className='vol1company'>Shaastra 2022 , IIT Madras</div>
                        <div className='vol1date'>(Nov 2021 - Jan 2022)</div>
                        <ul className='vol1exp'>
                            <li>Found innovative and effective social media strategies to help Shaastra find the required targeted audience.
                                <ul>
                                    <li>Responsible for publicizing SAMPARK - conducted by Shaastra for colleges across thecountry .</li>
                                    <li>Developed campus-specific marketing and outreach programs/ campaigns.</li>
                                </ul>
                            </li>
                            <li>Achieved Third Highest points as the campus ambassador and recieved the honor and rewards.</li>
                        </ul>
                    </div>
                </div>
                <div className='vol2v'>
                    <div className='vol2vimg'><img className='vol2vimgpic' src={Is} alt="Henry Harvin" /></div>
                    <div className='vol2vdesc'>
                        <div className='vol2vrole'>Internshala Student Partner</div>
                        <div className='vol2vcompany'>Internshala</div>
                        <div className='vol2vdate'>(Oct 2021 - Dec 2021)</div>
                        <ul className='vol2vexp'>
                            <li>Created awareness about Internshala internships and encouraged new students to register for Internshala.Participated in social media branding campaigns and learnt how to communicate for a brand online.</li>
                        </ul>
                    </div>
                </div>
                <div className='vol3'>
                    <div className='vol3img'><img className='vol3imgpic' src={Moodi} alt="Henry Harvin" /></div>
                    <div className='vol3desc'>
                        <div className='vol3role'>Mood Indigo</div>
                        <div className='vol3exp'>Second Runner Up in Mixed Medium Art , Indoor Indigo conducted in 2021 by IIT Bombay.</div>
                    </div>
                </div>
                <div className='parttitle'>Participation</div>
                <div className='participationcrd'>
                    <div className=''><img className='microsoft' src={Microsoft} alt="Microsoft AI classroom series"/></div>
                    <div className=''><img className="technosys" src={Technosys} alt="Technosys" /></div>
                    <div className=''><img className="tantrafiesta" src={Tantrafiesta} alt="Code-Fiesta" /></div>
                    <div className=''><img className="ideeavolt" src={Ideeavolt} alt="Code-Fiesta" /></div>
                    <div className=''><img className="aws" src={Nitc} alt="Code-Fiesta" /></div>
                    <div className=''><img className="quintessential" src={Quintessential} alt="Quintessential" /></div>
                    <div className=''><img className="upflairs" src={Upflairs} alt="Code-Fiesta" /></div>
                    <div className=''><img className="jigserate" src={Jigserate} alt="Code-Fiesta" /></div>
                    <div className=''><img className="chimera" src={Chimera} alt="Code-Fiesta" /></div>
                </div>

            </div>

            </div>)
    
}