import React from 'react';
import './Projects.css';
import Navbar from './Navbar';
import Navbarlargescreen from './Navbarlargescreen';
import Caseira from './assets/caseira.jpg';
import Webpage from './assets/webpage.jpg';
import Chatbot from './assets/chatbot.jpg';
import Concrete from './assets/Concrete.jpg';
import Covid from './assets/Covid.png';
import Heart from './assets/heart.jpg'
import Linkicon from './assets/linkicon.png';

export default function Projects(){
    return(<div className='projectpg'>
                <div className='navbarsmallprojects'><Navbar /></div>
                <div className='navbarlargeprojects'><Navbarlargescreen /></div>
                <div className='projectmainpage'>
                    <div className='projecttitle'>PROJECTS</div>
                    <div className='projectscards1'>
                        <div className='crd1'>
                            <div className='caseira'><img className='caseiraimg' src={Caseira} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Caseira Virtual Assistant</div>
                            <div className='project1txt'>Created an AI assistant that uses speech recognition and responses accordingly. Used different Python libraries to access wikipedia , calender , browser , etc.</div>
                            <a href="https://github.com/shardakumari505/caseira"><div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div></a>
                        </div>
                        {/* <div className='crd2'>
                            <div className='caseira'><img className='caseiraimg' src={Webpage} alt="caseira" /></div>
                            <div className='tool'>ReactJS , NodeJS</div>
                            <div className='nameproject1'>E-Commerce Website</div>
                            <div className='project1txt'>The main objective of the E-commerce application is to sell Eye glasses, lens and opticals and allows users to buy items by adding them to cart. It handles all the payments using stripe payments API. Tech-stack used are: ReactJS, Redux, Hooks, Sass, Git.</div>
                            
                        </div> */}
                        <div className='crd1b'>
                            <div className='caseira'><img className='caseiraimg' src={Concrete} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Concrete Analysis</div>
                            <div className='project1txt'>Analysed mechanical and durability behavior of fiber reinforced concrete , incorporating different types of natural , pp and steel fibers under cyclic exposure of heat-cool and wet-dry. Used matplotlib and seaborn mainly for visulaization.</div>
                            
                        </div>
                        <div className='crd3'>
                            <div className='caseira'><img className='caseiraimg' src={Chatbot} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Chatbot</div>
                            <div className='project1txt'>Programmed a chatbot using few different libraries of Python which takes link of a webpage as input , reads the page and further answers the users questions based on the page.</div>
                            <a href="https://github.com/shardakumari505/chatbot"><div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div></a>
                        </div>
                    </div>
                    <div className='projectscards2'>
                        
                        <div className='crd2b'>
                            <div className='caseira'><img className='caseiraimg' src={Covid} alt="caseira" /></div>
                            <div className='tool'>Python</div>
                            <div className='nameproject1'>Covid-19 Vaccination Analysis</div>
                            <div className='project1txt'>Using different python libraries such as matplotlib , seaborn and plotly , I tried to analyse the covid vaccination status of different countries in the world and India in specifics. Plotted the day-to-day status , half-yearly as well as on yearly basis.Also Plotted which vaccines are major in use on a country basis.</div>
                            <a href="https://github.com/shardakumari505/covid_analysis"><div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div></a>
                        </div>
                        <div className='crd3b'>
                            <div className='caseira'><img className='caseiraimg' src={Heart} alt="caseira" /></div>
                            <div className='tool'>Python , Logistic Regression</div>
                            <div className='nameproject1'>Heart Attack Prediction</div>
                            <div className='project1txt'>To ease the prediction of Heart Attacks in a patient , prepared a machine learning model using Logistic Regression technique which takes certain inputs of data and give the output whether there is any possibility of heart attack or not.</div>
                            <a href="https://github.com/shardakumari505/Heart-Attack-Prediction"><div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div></a>
                        </div>
                    </div>
                </div>


            </div>)

}