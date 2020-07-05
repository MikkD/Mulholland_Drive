import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

function Header(theLocation) {
    const [isActive, setIsActive] = useState(false);
    const navbar = useRef()

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (isActive && window.innerWidth > 550) {
                setIsActive(false)
            }
        });

        //**********************************//
        // window.addEventListener('scroll', () => {
        //     if (theLocation.theLocation.location.pathname === "/") {
        //         window.scrollY > 725 ?
        //             navbar.current.style.backgroundColor = "black" : navbar.current.style.backgroundColor = "transparent"
        //     }
        // })
        //**********************************//


        return () => {
            window.removeEventListener('resize', () => window.innerWidth);
            window.removeEventListener('scroll', () => window.innerWidth);
        }

    }, [isActive])

    return (
        <React.Fragment>
            <header ref={navbar} className="header">
                <div className="flex-header">
                    <a href="#" className="logo">Mulholland Drive</a>
                    <div className="menu">
                        <a style={{ color: "crimson" }} href="#">Go Back</a>
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