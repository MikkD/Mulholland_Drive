import React from 'react';
import { Link } from 'react-router-dom';
import './HiddenMenu.css';


function HiddenMenu({ isActive }) {
    return (
        <React.Fragment>
            <div style={{ transform: isActive ? 'translate(0%)' : 'translate(100%)' }} className="nav-bar-slider">
                <div className="nav-bar-slider-body">
                    <ul className="slider-links">
                        <li><Link to={{ pathname: '/' }} >Shop</Link></li>
                        <li><Link to={{ pathname: '/ContactUs' }}>Contact</Link></li>
                        <li><div className="divider"></div></li>
                        <li><Link to={{ pathname: '/ShoppingBag' }}>Bag</Link></li>
                        <li><div className="divider"></div></li>
                        <li><a className="social-link" href="https://www.facebook.com/">Facebook</a></li>
                        <li><a className="social-link" href="https://www.instagram.com/">Instagram</a></li>
                        <li><a className="social-link" href="https://www.twitter.com/">Twitter</a></li>
                    </ul>
                </div>
                <div className="nav-bar-slider-footer">
                    <button className="sign-in-up-button">Log In / Register</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HiddenMenu