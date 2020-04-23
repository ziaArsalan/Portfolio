import React from 'react';
import './Social.css';
import { socialCircle, profile } from '../../Profile';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-mdi/github';
import facebookIcon from '@iconify/icons-mdi/facebook';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import gmailIcon from '@iconify/icons-mdi/gmail';

export default function About() {
    return (
        <div>
            <a href={socialCircle.github} target="_blank">
                <Icon icon={githubIcon} className="github-icon"/>
            </a>
            <a href={socialCircle.facebook} target="_blank">
                <Icon icon={facebookIcon} width="60px"/>
            </a>
            <a href={socialCircle.linkedIn} target="_blank">
                <Icon icon={linkedinIcon} width="60px"/>
            </a>
            <a href={`mailto:${profile.email}`} target="_blank">
                <Icon icon={gmailIcon} width="60px"/>
            </a>
        </div>
    )
}
