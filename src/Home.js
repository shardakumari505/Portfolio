import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Gmail from './gmail.png';
import Linkedin from './linkedin.gif';
import Github from './3d-fluency-github.png';
import Twitter from './twitter.gif';
import Me from './me.png';
import Ft from './ft.png';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Home(){
    const textRef = useRef();

useEffect( () =>{
    init(textRef.current,{
        showCursor:true,
        backDelay:1500,
        backspeed:60,
        strings:["Machine Learning Practitioner", "Web Developer"]
    });
},[]);

    return(<div className='homepage'>
        <Navbar />
        <div className='profiletop'>
            <div className='profilepic'><img className='profilepicimg' src={Me} alt='profile' /></div>
            <div className='profileright'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Sharda Kumari</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                    <button className='hirebutton'>Hire Me</button>
                </div>
            </div>
        </div>
        <div className='aboutmesection'>
            <div className='aboutmetitle'>About</div>
            <div className='aboutmetext'>Sed ut perspiciatis, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do Lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos doloresSed ut perspiciatis, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do Lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores Sed ut perspiciatis, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do Lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores</div>
        </div>
        <div className='contactmeat'>
                <div className='logo'><img className='gmaillogo' src={Gmail} alt="loading..." /></div>
                <div className='logo'><img className='linkedinlogo' src={Linkedin} alt="loading..." /></div>
                <div className='logo'><img className='gitlogo' src={Github} alt="loading..." /></div>
                <div className='logo'><img className='twitterlogo' src={Twitter} alt="loading..." /></div>
        </div>
        <div className='footer'><img className='ftimg' src={Ft} alt='c' /></div>
        


    </div>)
}

