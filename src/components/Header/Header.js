import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    useEffect(() => {
        window.addEventListener('resize', () => console.log(window.innerWidth))
        return () => {
            window.removeEventListener('resize')
        }
    })

    return (
        <React.Fragment>
            <header className="header">
                <div className="flex-header">
                    <a href="#" className="logo">Mulholland Drive</a>
                    <div className="menu">
                        <a href="#">Shop</a>
                        <a href="#">Contact</a>
                        <a href="#">Sign In</a>
                        <a href="#">Bag<span className="dot"></span></a>
                    </div>
                    <div className="hamburger-wrapper">
                        <div className="hamburger-menu">
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;