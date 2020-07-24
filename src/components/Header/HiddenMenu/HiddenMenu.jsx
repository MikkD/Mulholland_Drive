import React from 'react';
import { Link } from 'react-router-dom';
import './HiddenMenu.css'


export default function HiddenMenu({ isActive }) {
    console.log('~~~~~~~~~~~~~~~HiddenMenu.jsx~~~~~~~~~~~~~~~')
    return (
        <React.Fragment>
            <div style={{ transform: isActive ? 'translate(0%)' : 'translate(100%)' }} className="nav-bar-slider">
                <div className="nav-bar-slider-body">
                    <ul className="slider-links">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><div className="divider"></div></li>
                        <li><Link to={{ pathname: '/ShoppingBag' }}>Bag</Link></li>
                        <li><div className="divider"></div></li>
                        <li><a className="social-link" href="#">Facebook</a></li>
                        <li><a className="social-link" href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="nav-bar-slider-footer">
                    <button className="sign-in-up-button">Log In / Register</button>
                </div>
            </div>
        </React.Fragment>
    )
}
