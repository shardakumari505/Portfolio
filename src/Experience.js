import React from 'react';
import './Experience.css';
import Hh from './hh.jpg';
import Is from './is.jfif';
import Shaastra from './shaastra.jpg';

export default function Experience(){

    return(<div className='experiencepg'>
        <div className='exptitle'>Work Experience</div>
        <div className='exp1'>
            <div className='exp1img'><img className='hhimg' src={Hh} alt="Henry Harvin" /></div>
            <div className='exp1desc'></div>
        </div>
        <div className='voltitle'>Volunteer</div>
        <div className='vol1'>
            <div className='vol1img'><img className='hhimg' src={Shaastra} alt="Henry Harvin" /></div>
            <div className='vol1desc'></div>
        </div>
        <div className='vol2'>
            <div className='vol2img'><img className='hhimg' src={Is} alt="Henry Harvin" /></div>
            <div className='vol2desc'></div>
        </div>
        <div className='parttitle'>Participation</div>
        <div className='participationcrd'>
            
        </div>



    </div>)
    
}