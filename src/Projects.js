import React from 'react';
import './Projects.css';
import Caseira from './caseira.jpg';
import Linkicon from './linkicon.png';

export default function Projects(){
    return(<div className='projectpg'>
        <div className='projecttitle'>Projects</div>
        <div className='projectscards'>
            <div className='crd1'>
                <div className='caseira'><img className='caseiraimg' src={Caseira} alt="caseira" /></div>
                <div className='tool'>Python</div>
                <div className='nameproject1'>Caseira Virtual Assistant</div>
                <div className='project1txt'>Created an AI assistant that uses speech recognition and responses according. Used different Python libraries to access wikipedia , calender , browser , etc</div>
                <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
            </div>
            <div className='crd2'>
                <div className='caseira'><img className='caseiraimg' src={Caseira} alt="caseira" /></div>
                <div className='tool'>Python</div>
                <div className='nameproject1'>Caseira Virtual Assistant</div>
                <div className='project1txt'>Created an AI assistant that uses speech recognition and responses according. Used different Python libraries to access wikipedia , calender , browser , etc</div>
                <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
            </div>
            <div className='crd3'>
                <div className='caseira'><img className='caseiraimg' src={Caseira} alt="caseira" /></div>
                <div className='tool'>Python</div>
                <div className='nameproject1'>Caseira Virtual Assistant</div>
                <div className='project1txt'>Created an AI assistant that uses speech recognition and responses according. Used different Python libraries to access wikipedia , calender , browser , etc</div>
                <div className='icondiv'><img className='icon' src={Linkicon} alt="link" /></div>
            </div>
        </div>


    </div>)
}