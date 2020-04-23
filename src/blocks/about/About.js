import React from 'react';
import './About.css';
import { welcome } from '../../Profile'
import Hexagons from '../../components/hexagons/Hexagons';
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div id="about" className="main-wrap">
            <Fade top>
                <div className="title">ABOUT</div>
            </Fade>
            <div className="subtitle">
                <div className="para-color intro-details">{welcome.detailIntro}</div>
            </div>
            <Hexagons />
        </div>
    )
}
