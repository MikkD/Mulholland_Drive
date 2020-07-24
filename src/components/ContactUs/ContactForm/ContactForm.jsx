import React, { useState } from 'react'

function ContactForm() {

    return (
        <React.Fragment>
            <form className="contact-form">
                <p> feel free to contact us and we will get back to you as soon as we can</p>
                <label>
                    <input type="text" placeholder="name" />
                </label>
                <label>
                    <input type="text" placeholder="email" />
                </label>
                <label>
                    <input type="text" placeholder="subject" />
                </label>
                <label>
                    <textarea type="textarea" placeholder="message" />
                </label>
                <input type="submit" className="submit-form-button" />
            </form>
        </React.Fragment>
    )
}

export default ContactForm