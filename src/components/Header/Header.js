import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (isActive && window.innerWidth > 550) {
                setIsActive(false)
                console.log('CALLED')
            }
        }, [])


        return () => {
            window.removeEventListener('resize', () => window.innerWidth)
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
                    <a className="hidden-bag" href="#">Bag<span className="dot"></span></a>
                    <div onClick={() => setIsActive(prevState => prevState = !prevState)} className="hamburger-wrapper">
                        <div className={isActive ? "hamburger-menu active" : "hamburger-menu"}>
                        </div>
                    </div>
                </div>
            </header>

            <div style={{ transform: isActive ? 'translate(0%)' : 'translate(100%)' }} className="nav-bar-slider">
                <div className="nav-bar-slider-body">
                    <ul className="slider-links">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><div className="divider"></div></li>
                        <li><a href="#">Bag</a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="social-link" href="#">Facebook</a></li>
                        <li><a className="social-link" href="#">Instagram</a></li>
                    </ul>

                </div>
                <div className="nav-bar-slider-footer">
                    <button className="sign-in-up-button">Log In / Register</button>
                </div>
            </div>

        </React.Fragment >
    )
}

export default Header;