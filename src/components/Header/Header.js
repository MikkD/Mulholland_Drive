import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { withRouter } from 'react-router-dom';

const DEFAULT_WIDTH = 550;

function Header(props) {
    const [isActive, setIsActive] = useState(false);
    const isActiveRef = useRef(false);
    isActiveRef.current = isActive;
    const navbar = useRef()

    useEffect(() => {
        console.log('Hedaer with the new page')
        console.log('props', props)
        // #1
        const handleViewPortChange = () => {
            if (isActiveRef.current && window.innerWidth > DEFAULT_WIDTH) {
                setIsActive(false)
            }
        }
        // #2
        const handleScroll = () => {
            props.match.params.product === undefined && window.scrollY > 725 ?
                navbar.current.style.backgroundColor = "black" : navbar.current.style.backgroundColor = "transparent"
            props.match.params.product !== undefined ? navbar.current.style.backgroundColor = "black" : navbar.current.style.backgroundColor = "transparent";
        }
        window.addEventListener('resize', handleViewPortChange)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('resize', handleViewPortChange);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [props.match])


    return (
        <React.Fragment>
            <header
                ref={navbar} className="header"
                style={props.match.params.product === undefined ? { position: "fixed" } : { position: "relative" }}>
                <div className="flex-header">
                    <a href="#" className="logo">Mulholland Drive</a>
                    <div className="menu">
                        <Link
                            to={{ pathname: '/' }}
                            style={props.match.params.product === undefined ?
                                { display: "none" } :
                                { color: "crimson", display: "inline-block" }} >
                            Go Back</Link>
                        <a href="#">Shop</a>
                        <a href="#">Contact</a>
                        <a href="#">Sign In</a>
                        <Link to={{ pathname: '/ShoppingBag/XXXX' }} >Bag<span className="dot"></span></Link>
                    </div>
                    <a className="hidden-bag" href="#">Bag<span className="dot"></span></a>
                    <div
                        onClick={() => setIsActive(prevState => !prevState)}
                        className="hamburger-wrapper">
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

        </React.Fragment >
    )
}

export default withRouter(Header);