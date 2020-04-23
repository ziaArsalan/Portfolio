import React from 'react';
import './Welcome.css';
import { welcome } from '../../Profile';
import Button from '../../components/button/Button'
import Social from '../../components/social/Social'
import Flash from 'react-reveal/Flash';

export default function Welcome() {
    return (
        <div className="welcome-main bg">
            <div>document.write<div className="hello-world">('
            <Flash>
                <strong>{welcome.greet}</strong>
            </Flash>
            ')<strong>;</strong></div></div>
            <div className="subtitle">
                <div className="intro">{welcome.intro}</div>
                <Social />
                <div>
                    <Button text="Contact me" />
                    <Button text="Resume" />
                </div>
            </div>
        </div>
    )
}
