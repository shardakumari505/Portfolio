import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Experience.css';
import Iitd from './assets/iitd.png';
import Microsoft1 from './assets/microsoft1.png';
import Vaguss from './assets/vaguss.jpg';
import Hh from './assets/hh.jpg';
import Hh1 from './assets/hh.png';
import Shaastra from './assets/shaastra.jpg';
import Amazon from './assets/amazon.png';
import Iith from './assets/iith.png';
import Stanford from './assets/stanford.png';
import Nvcti from './assets/nvcti.png';
import Moodi from './assets/moodi.png';
import Microsoft from './assets/Microsoft.png';
import Technosys from './assets/Technosys.png';
import Quintessential from './assets/Quintessential.png';
import Tantrafiesta from './assets/Tantrafiesta.png';
import Ideeavolt from './assets/Ideeavolt.png';
import Upflairs from './assets/Upflairs.png';
import Jigserate from './assets/Jigserate.png';
import Chimera from './assets/chimera.png';
import Nitc from './assets/nitc.jpg';
import Navbar from './Navbar';
import Navbarlargescreen from './Navbarlargescreen';

export default function Experience() {

    return (<div className='experiencepg'>
        <div className='navbarsmallexperience'><Navbar /></div>
        <div className='navbarlargeexperience'><Navbarlargescreen /></div>
        <div className='experiencepagehome'>
            <div className='exptitle'>WORK EXPERIENCE</div>
            <div className='exp1'>
                <img className='hh1img' src={Microsoft1} alt="Henry Harvin" />
                <div className='exp1desc'>
                    <div className='exp1role'>Software Engineering Intern</div>
                    <div className='exp1company'>Microsoft</div>
                    <div className='exp1date'>(May 2023 - July 2023)</div>
                    <ul className='exp1exp'>
                        <li>Successfully contributed to 2 projects involving cloud-based solutions on the Azure platform, with a specific focus on user interface (UI) development.</li>
                        <li>Integrated REST APIs to facilitate seamless data exchange and enhance overall application functionality.</li>
                        <li>Utilized Docker for containerization, streamlining application deployment and enhancing scalability in the cloud environment.</li>
                    </ul>
                </div>
            </div>
            <div className='exp1'>
                <img className='hh1img' src={Iitd} alt="Henry Harvin" />
                <div className='exp1desc'>
                    <div className='exp1role'>Summer Research Fellow</div>
                    <div className='exp1company'>Indian Institute of Technology (IIT) Delhi</div>
                    <div className='exp1date'>(June 2022 - July 2023)</div>
                    <ul className='exp1exp'>
                        <li>Worked under the supervision of Dr. Tapan Gandhi from Electrical Engineering department on application of machine learning in tumor analysis.</li>
                    </ul>
                </div>
            </div>
            <div className='exp1'>
                <img className='hh1img' src={Microsoft1} alt="Henry Harvin" />
                <div className='exp1desc'>
                    <div className='exp1role'>Microsoft Engage Mentee 2022</div>
                    <div className='exp1company'>Microsoft</div>
                    <div className='exp1date'>(May 2022 - June 2023)</div>
                    <ul className='exp1exp'>
                        <li>Presented idea of secure online transaction through developing a website, which provides add on security of face recognition just before payment.</li>
                        <li>Face recognition feature matches real time face with the image stored in database through facial landmarks. On succesful match, it takes your bank account details alrady stored in databse and the transaction is complete.</li>
                        <li>Used MERN (React , NodeJS , ExpressJS and MongoDB) Tech Stack.</li>
                        <li>Recieved Software Engineering Internship (SWE) Offer at Microsoft for 2023.</li>
                    </ul>
                </div>
            </div>
            <div className='exp1'>
                <img className='hh1img' src={Vaguss} alt="Henry Harvin" />
                <div className='exp1desc'>
                    <div className='exp1role'>Web Developer</div>
                    <div className='exp1company'>Vaguss</div>
                    <div className='exp1date'>(Jan 2022 - April 2023)</div>
                    <ul className='exp1exp'>
                        <li>Worked on Developing user-friendly webpage using Javascript , CSS and React.js. Worked mainly on the frontend part for attractive responses.</li>
                    </ul>
                </div>
            </div>
            <div className='exp1'>
                <img className='hh1img' src={Shaastra} alt="Henry Harvin" />
                <div className='exp1desc'>
                    <div className='exp1role'>Marketing Intern | Campus Ambassador</div>
                    <div className='exp1company'>Shaastra 2022 , IIT Madras</div>
                    <div className='exp1date'>(Nov 2021 - Jan 2022)</div>
                    <ul className='exp1exp'>
                        <li>Increased outreach of Shaastra , the annual technical fest of IIT Madras.</li>
                        <li>Found innovative and effective social media strategies to help Shaastra find the required targeted audience.
                            <ul>
                                <li>Responsible for publicizing SAMPARK - conducted by Shaastra for colleges across thecountry.</li>
                                <li>Developed campus-specific marketing and outreach programs/ campaigns.</li>
                            </ul>
                        </li>
                        <li>Achieved Third Highest points as the campus ambassador and recieved honor and rewards.</li>
                    </ul>
                </div>
            </div>
            <div className='exp1'>
                <img className='hh1img' src={Hh} alt="Henry Harvin" />
                <div className='exp1desc'>
                    <div className='exp1role'>Analytics Intern</div>
                    <div className='exp1company'>Henry Harvin Education</div>
                    <div className='exp1date'>(Jun 2021 - Sept 2021)</div>
                    <ul className='exp1exp'>
                        <li>Completed 4 projects in 3 months time with 2 machine learning models. Lead a team of 6 members in 4th project and presented the project on 8th day to the mentor.</li>
                        <li>Data Collection using pandas , scrapy and beautiful soup , Data cleaning , Analysis , ML model (ARIMA) , Data Visualization using Power BI and Report of the Project.</li>
                    </ul>
                </div>
            </div>

            <div className='exptitle'>COURSES AND ACHIEVEMENTS</div>
            <div className='certcontent'>
                <Carousel>
                    <div className='cert1'>
                        <img className='cert1img' src={Amazon} alt="Henry Harvin" />
                        <div className='cert1desc'>
                            <div className='cert1role'>Amazon ML Summer School</div>
                            <div className='cert1company'>Amazon</div>
                            <div className='cert1date'>July 2022</div>
                            <ul className='cert1exp'>
                                <li>Selected for Amazon ML summer school 2022 wherein I get a chance to learn from and interact with Scientists at Amazon who have immense knowledge in their ML domain.</li>
                                <li>The curriculum will cover fundamental concepts while linking them to practical industry applications through an immersive experience.</li>
                                <li>The eight modules on ML topics that will be covered are :
                                    <ul>
                                        <li>Supervised Learning</li>
                                        <li>Deep Neural Networks</li>
                                        <li>Dimensionality Reduction</li>
                                        <li>Unsupervised Learning</li>
                                        <li>Probabilistic Graphical Models</li>
                                        <li>Sequential Learning</li>
                                        <li>Causal Inference</li>
                                        <li>Reinforcement Learning</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='cert1'>
                        <img className='cert1img' src={Iith} alt="Henry Harvin" />
                        <div className='cert1desc'>
                            <div className='cert1role'>Web Development</div>
                            <div className='cert1company'>Elan & nVision, Indian Institute of Technology (IIT) Hyderabad</div>
                            <div className='cert1date'>March 2022</div>
                            <ul className='cert1exp'>
                                <li>Ranked 2nd in Web Development Competition among more than 200 registered participants.</li>
                                <li>A programme wherein developers had to create unique and peculiar webpages within stipulated time of 3 days.</li>
                                <li>Designed a platform DevIN for developers to connect with each other.</li>
                                <li>Features of DevIN are :
                                    <ul>
                                        <li>Real Time Collaborative Code Editor with live video and audio calls. Enjoy your favorite music while working on the same platform.</li>
                                        <li>Connect to Teams via Virtual Chamber, invite friends, teams and connect via text/video/audio.</li>
                                        <li>Read and Share Blogs</li>
                                        <li>Personal Task List</li>
                                        <li>Music for good mood :)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='cert1'>
                        <img className='cert1img' src={Nvcti} alt="Henry Harvin" />
                        <div className='cert1desc'>
                            <div className='cert1role'>Winter Challenge 1.0</div>
                            <div className='cert1company'>NVCTI, Indian Institute of Technology (IIT, ISM) Dhanbad</div>
                            <div className='cert1date'>(Jan 2022 - April 2022)</div>
                            <ul className='cert1exp'>
                                <li>Cleared 3rd stage of Winter challenge 3.0, an event to infuse a culture of innovation and provide a platform for creative young minds to bring their imaginative ideas into reality.</li>
                                <li>Stages of event :
                                    <ul>
                                        <li>Stage 1 : Registration</li>
                                        <li>Stage 2 : Quiz & QnA Session based on the domain selected in Stage 1.</li>
                                        <li>Stage 3 : Abstract Submission :: Presented the idea of a web application that provides cure and remedies of the minor symptoms through natural methods and Ayurveda.</li>
                                        <li>Stage 4 : Prototype Submission</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='cert1'>
                        <img className='cert1img' src={Moodi} alt="Henry Harvin" />
                        <div className='cert1desc'>
                            <div className='cert1role'>Mood Indigo</div>
                            <div className='cert1company'>Indoor Indigo, Indian Institute of Technology (IIT) Bombay</div>
                            <div className='cert1date'>2021</div>
                            <ul className='cert1exp'>
                                <li>2nd Runner Up in Mixed Medium Art among all participants , conducted by Mood Indigo in its 51st Edition.</li>
                                <li>Also Participated in Watercolour Portrait Workshop.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='cert1'>
                        <img className='cert1img' src={Stanford} alt="Henry Harvin" />
                        <div className='cert1desc'>
                            <div className='cert1role'>Code in Place</div>
                            <div className='cert1company'>Stanford University</div>
                            <div className='cert1date'>2021</div>
                            <ul className='cert1exp'>
                                <li>As an act of community service, a group of computer science instructors came together to offer a high quality learning experience free of charge for people who want to learn introductory coding, subject to availability. In other words, it is a free online version of Stanford's CS 106A.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='cert1'>
                        <img className='cert1img' src={Hh1} alt="Henry Harvin" />
                        <div className='cert1desc'>
                            <div className='cert1role'>Certified Machine Learning Course</div>
                            <div className='cert1company'>Henry Harvin</div>
                            <div className='cert1date'>Jan 2021 - Mar 2021</div>
                            <ul className='cert1exp'>
                                <li>Completed Machine Learning using Python Course from Henry Harvin.</li>
                            </ul>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className='exptitle'>EXTRA-CURRICULAR</div>
            <div className='extracurriculum'>
                <div className='vol1'>
                    <div className='vol1desc'>
                        <div className='vol1role'>Lead Igniter</div>
                        <div className='vol1company'>Unstop Club (Early D2C)</div>
                        <div className='vol1date'>(Apr 2022 - Present)</div>
                    </div>
                </div>
                <div className='vol2v'>
                    <div className='vol1desc'>
                        <div className='vol1role'>Internshala Student Partner</div>
                        <div className='vol1company'>Internshala</div>
                        <div className='vol1date'>(Oct 2021 - Dec 2021)</div>
                    </div>
                </div>
                <div className='vol2v'>
                    <div className='vol1desc'>
                        <div className='vol1role'>2nd Runner Up</div>
                        <div className='vol1company'>Mixed Media Art</div>
                        <div className='vol1company'>Mood Indigo , IIT Bombay</div>
                        <div className='vol1date'>2021</div>
                    </div>
                </div>
            </div>

            <div className='exptitle'>PARTICIPATION</div>
            <div className='participationcrd'>
                <div className=''><img className='microsoft' src={Microsoft} alt="Microsoft AI classroom series" /></div>
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