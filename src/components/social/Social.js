import React from 'react';
import './Social.css';
import { social } from '../../Profile';
import { Icon } from '@iconify/react';

export default function About() {
    return (
        <div className="social-wrap">
            {social.map((platform, index) => (
                <a key={index} href={platform.link} target="_blank">
                    <Icon icon={platform.icon} className="social-icon" />
                </a>
            ))}
        </div>
    )
}
