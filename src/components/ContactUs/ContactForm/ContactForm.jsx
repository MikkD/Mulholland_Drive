import React, { useState } from 'react';

function ContactForm() {
    const [formValue, setFormValue] = useState({})
    const [formError, setFormError] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formValue.name || !formValue.email || !formValue.subject || !formValue.textarea) {
            setFormError(true)
        } else {
            setFormError(false)
            setFormValue(prevState => ({ ...prevState, name: '', email: '', subject: '', textarea: '' }))
            setIsSubmitted(true)
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormValue(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} className="contact-form">
                {formError ? <p className="error-message">Enter all input fields</p> :
                    <p> feel free to contact us and we will get back to you as soon as we can</p>}
                <label>
                    <input onChange={handleChange} value={formValue.name} type="text" name="name" placeholder="name" />
                </label>
                <label>
                    <input onChange={handleChange} value={formValue.email} type="email" name="email" placeholder="email" />
                </label>
                <label>
                    <input onChange={handleChange} value={formValue.subject} type="text" name="subject" placeholder="subject" />
                </label>
                <label>
                    <textarea onChange={handleChange} value={formValue.textarea} type="textarea" name="textarea" placeholder="message" />
                </label>
                <input type="submit" value={isSubmitted ? "Submitted" : "Submit"} className="submit-form-button" />
            </form>
        </React.Fragment>
    )
}

export default ContactForm