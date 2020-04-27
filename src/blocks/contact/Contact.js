import React from 'react';
import './Contact.css';
import { contact } from '../../Profile'
import Form from '../../components/form/Form'
import Social from '../../components/social/Social'

export default function Contact() {
    return (
       <div id="contact" className="main-wrap">
            <div className="title">Contact</div>
            <Social />
        	<div className="subtitle contact-subtitle para-color">{contact.tagLine}</div>
            <Form />
       </div>
    )
} 