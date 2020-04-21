import React from 'react';
import './Welcome.css';
import { profile, title } from '../../Profile'

export default function Welcome() {
    return (
        <div className="welcome-main">
            <div className="title">
                <h1>{title.greet} {title.intro}</h1>
                <p className="subtitle">{title.detailIntro}</p>
            </div>
        </div>
    )
}
