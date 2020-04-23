import React from 'react';
import './Project.css';
import { skills } from '../../Profile';
import Fade from 'react-reveal/Fade'

export default function Project() {
    return (
       <div id="projects" className="main-wrap">
           <Fade top>
                <div className="title">Projects</div>
            </Fade>
           <div className="row project-row">
              <div className="col-6">
                <div className="card">
                    Hello
                </div>
              </div>
              <div className="col-6">
                World
              </div>
           </div>
       </div>
    )
}
