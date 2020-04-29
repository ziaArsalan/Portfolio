import React from 'react';
import './Form.css';
import { contact } from '../../Profile'

export default function Form() {
    return (
        <div className="form-box" onSubmit={event => call(event)}>
            <form className="contact-form">
                <input type="text" name="name" placeholder={contact.form.name} className="contact-input" required/>
                <input type="email" name="email" placeholder={contact.form.email} className="contact-input" required/>
                <input type="text" name="subject" placeholder={contact.form.subject} className="contact-input" required/>
                <textarea type="text" name="msg" placeholder={contact.form.message} className="contact-input" required></textarea>
                <button type="submit" className="main-button contact-button" >Submit</button>
                <div id="response"></div>
            </form>
        </div>
    )
} 

async function call(event){
    event.preventDefault()
    const name = event.target.elements.name.value
    const email = event.target.elements.email.value
    const subject = event.target.elements.subject.value
    const msg = event.target.elements.msg.value

    const url = 'http://localhost:8080/api/contact_email';

    const requestOption = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({name, email, subject, msg})
    }

    const result = await fetch(url, requestOption)

    const data = await result.json()
    document.getElementById('response').innerText = data.message
    console.log(data);
}