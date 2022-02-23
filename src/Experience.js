import React from 'react';
import './Experience.css';
import Hh from './hh.jpg';
import Is from './is.jfif';
import Shaastra from './shaastra.jpg';
import Moodi from './moodi.jpg';

export default function Experience(){

    return(<div className='experiencepg'>
        <div className='exptitle'>Work Experience</div>
        <div className='exp1'>
            <div className='exp1img'><img className='hhimg' src={Hh} alt="Henry Harvin" /></div>
            <div className='exp1desc'>
                <div className='exp1role'>Analytics Intern</div>
                <div className='exp1company'>Henry Harvin Education</div>
                <div className='exp1date'>(Jun 2021 - Sept 2021)</div>
                <ol className='exp1exp'>
                    <li>Completed 4 projects in 3 months time with 2 machine learning models.Lead a team of 6 members in 4thproject and presented the project on 8thday to the mentor.</li>
                    <li>Data Collection using pandas , scrapy and beautiful soup , Data cleaning , Analysis , ML model(ARIMA) , Data Visulaization using powerBI and Report of theProject.</li>
                </ol>
            </div>
        </div>
        <div className='voltitle'>Extra-Curricular</div>
        <div className='vol1'>
            <div className='vol1img'><img className='hhimg' src={Shaastra} alt="Henry Harvin" /></div>
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
        <div className='vol2'>
            <div className='vol2img'><img className='hhimg' src={Is} alt="Henry Harvin" /></div>
            <div className='vol2desc'>
                <div className='vol2role'>Internshala Student Partner</div>
                <div className='vol2company'>Internshala</div>
                <div className='vol2date'>(Oct 2021 - Dec 2021)</div>
                <ul className='vol2exp'>
                    <li>Created awareness about Internshala internships and encouraged new students to register for Internshala.Participated in social media branding campaigns and learnt how to communicate for a brand online.</li>
                </ul>
            </div>
        </div>
        <div className='vol3'>
            <div className='vol3img'><img className='hhimg' src={Moodi} alt="Henry Harvin" /></div>
            <div className='vol3desc'>
                <div className='vol3role'>Mood Indigo</div>
                <div className='vol3exp'>Second Runner Up in Mixed Medium Art , Indoor Indigo conducted in 2021 by IIT Bombay.</div>
            </div>
        </div>
        <div className='parttitle'>Participation</div>
        <div className='participationcrd'>
            
        </div>



    </div>)
    
}