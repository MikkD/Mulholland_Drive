import React from 'react';
import './ContactUs.scss';
import ContactForm from './ContactForm/ContactForm';

function ContactUs() {

    return (
        <React.Fragment>
            <div className="contact-main-wrapper">
                <div className="outer-wrapper">
                    <div className="left-side">
                        <div className="left-side-header">
                            <p>say hi to the team</p>
                            <h1>Contact Us</h1>
                        </div>
                        <div className="left-side-body">
                            <ContactForm />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="empty-container"></div>
                        <div className="fix-wrapper">
                            <div className="right-side-body">
                                <div className="info-block">
                                    <h4>opening hours</h4>
                                    <p>Monday-Friday:9AM-5AM</p>
                                    <p>Weekend:Closed</p>
                                </div>
                                <div className="info-block">
                                    <h4>Address</h4>
                                    <p>Sunnyvale,USA</p>
                                    <p>485 Portrero ave - 94085</p>
                                </div>
                                <div className="info-block">
                                    <h4>Support:</h4>
                                    <p>mulhollandDrive@gmail.com</p>
                                    <p>+1 415 685 6866</p>
                                </div>
                            </div>
                            <div className="right-side-footer">
                                <a href="https://www.facebook.com/">Facebook</a>
                                <a href="https://www.instagram.com/">Instagram</a>
                                <a href="https://www.linkedIn.com/">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContactUs