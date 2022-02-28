import React from 'react';
import './Projects.css';
import Caseira from './caseira.jpg';
import Webpage from './webpage.jpg';
import Chatbot from './chatbot.jpg';
import Concrete from './Concrete.jpg';
import Covid from './Covid.png';
import Linkicon from './linkicon.png';

export default function Projects(){
    return(<div className='projectpg'>
                <div className='projectmainpage'>
                    <div className='projecttitle'>Projects</div>
                    <div className='projectscards1'>
                        <div className='crd1'>
                            <div className='caseira'><img className='caseiraimg' src={Caseira} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Caseira Virtual Assistant</div>
                            <div className='project1txt'>Created an AI assistant that uses speech recognition and responses accordingly. Used different Python libraries to access wikipedia , calender , browser , etc.</div>
                            <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
                        </div>
                        <div className='crd2'>
                            <div className='caseira'><img className='caseiraimg' src={Webpage} alt="caseira" /></div>
                            <div className='tool'>ReactJS , NodeJS</div>
                            <div className='nameproject1'>Tour and Travel Website</div>
                            <div className='project1txt'>Developing a user-friendly webpage for a startup which will be used to locate the best of a place and includes many other features using HTML , CSS , React , Redux and Hooks and many other libraries.Working mainly on the frontend part for attractive and ease-acess responses.Project is under progress.</div>
                            <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
                        </div>
                        <div className='crd3'>
                            <div className='caseira'><img className='caseiraimg' src={Chatbot} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Chatbot</div>
                            <div className='project1txt'>Programmed a chatbot using few different libraries of Python which takes link of a webpage as input , reads the page and further answers the users questions based on the page.</div>
                            <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
                        </div>
                    </div>
                    <div className='projectscards2'>
                        <div className='crd1b'>
                            <div className='caseira'><img className='caseiraimg' src={Concrete} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Concrete Analysis</div>
                            <div className='project1txt'>Analysed mechanical and durability behavior of fiber reinforced concrete , incorporating different types of natural , pp and steel fibers under cyclic exposure of heat-cool and wet-dry. Used matplotlib and seaborn mainly for visulaization.</div>
                            <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
                        </div>
                        <div className='crd2b'>
                            <div className='caseira'><img className='caseiraimg' src={Covid} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Covid-19 Vaccination Analysis</div>
                            <div className='project1txt'>Using different python libraries such as matplotlib , seaborn and plotly , I tried to analyse the covid vaccination status of different countries in the world and India in specifics. Plotted the day-to-day status , half-yearly as well as on yearly basis.Also Plotted which vaccines are major in use on a country basis.</div>
                            <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
                        </div>
                        <div className='crd3b'>
                            <div className='caseira'><img className='caseiraimg' src={Chatbot} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Chatbot</div>
                            <div className='project1txt'>Programmed a chatbot using few different libraries of Python which takes link of a webpage as input , reads the page and further answers the users questions based on the page.</div>
                            <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
                        </div>
                    </div>
                </div>


            </div>)

}