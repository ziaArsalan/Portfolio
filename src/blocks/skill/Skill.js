import React from 'react';
import './Skill.css';
import { welcome } from '../../Profile';
import Fade from 'react-reveal/Fade'

export default function Welcome() {
    return (
       <div id="skills" className="main-wrap">
           <Fade top>
                <div className="title">Skills</div>
            </Fade>
           <div className="hex-row">
                <div className="col-6">
                    Hello world
                </div>
                <div className="col-6">
                    <img src={require("../../assets/img/full-stack.png")} width="100%" />
                </div>
           </div>
       </div>
    )
}
