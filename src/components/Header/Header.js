import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';

const DEFAULT_WIDTH = 550;

function Header(props) {
    const [isActive, setIsActive] = useState(false);
    const isActiveRef = useRef(false);
    isActiveRef.current = isActive;
    const navbar = useRef()

    console.log('HEADER props', props)

    useEffect(() => {
        props.location.pathname === '/' ?
            navbar.current.style.backgroundColor = 'transparent' :
            navbar.current.style.backgroundColor = 'black';
        // #1
        const handleViewPortChange = () => {
            if (isActiveRef.current && window.innerWidth > DEFAULT_WIDTH) {
                setIsActive(false)
            }
        }
        // #2
        const handleScroll = () => {
            props.location.pathname === '/' && window.scrollY > 725 ?
                navbar.current.style.backgroundColor = "black" : navbar.current.style.backgroundColor = "null"
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
            <header ref={navbar} className="header">
                <div className="flex-header">
                    <p className="logo">Mulholland Drive</p>
                    <div className="menu">
                        <Link
                            to={{ pathname: '/' }}
                            style={props.location.pathname === '/' ?
                                { display: "none" } :
                                { color: "crimson", display: "inline-block" }}
                        >Go Back</Link>
                        <Link>Shop</Link>
                        <Link>Contact</Link>
                        {/* REGULAR BELOW  */}
                        {props.setCurrentUser !== null ?
                            <Link onClick={() => firebase.auth().signOut()}>Sign Out</Link> :
                            <Link to={{ pathname: '/SignInUp' }}>Sign In</Link>}

                        <Link to={{ pathname: '/ShoppingBag' }} >Bag<span className="dot"></span></Link>
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
// Redux 
const mapStateToProps = state => ({
    setCurrentUser: state.rootUsers.currentUser
})

// export default withRouter(Header);
export default connect(mapStateToProps, null)(withRouter(Header))