import React from "react";
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-card">
            <p className="contact-subtitle">I would love to hear from you</p>
            <h2 className="contact-title">See you soon!</h2>
            <a href="https://www.linkedin.com/in/joshualek" target="_blank">
                <button className="contact-btn">Contact Me</button>
            </a>
        </div>
    )
}

export default Contact;