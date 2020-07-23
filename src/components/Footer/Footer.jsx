import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <React.Fragment>
            <div className="product-footer">
                <div className="product-footer-wrapper">
                    <div className="footer-item left-footer">
                        <h2><Link to={{ pathname: '/' }}>About Us</Link></h2>
                        <h2><Link to={{ pathname: '/' }}>Contact</Link></h2>
                        <h2><Link to={{ pathname: '/' }}>Terms</Link></h2>
                    </div>

                    <div className="footer-item  middle-footer">
                        <div className="icons-container">
                            <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                            <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                            <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
