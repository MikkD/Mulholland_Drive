import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import CartIconCounter from './CartIconCounter/CartIconCounter';
import HiddenMenu from './HiddenMenu/HiddenMenu';
import DropDownOnHover from './DropDownOnHover/DropDownOnHover';

const DEFAULT_WIDTH = 550;

function Header(props) {
    const [isActive, setIsActive] = useState(false);
    const [prevPath, setPrevPath] = useState()
    const isActiveRef = useRef(false);
    isActiveRef.current = isActive;
    const navbar = useRef()
    const prevPathRef = useRef()
    console.log('~~~~~~~~~~~~~~~Header.jsx~~~~~~~~~~~~~~~')

    useEffect(() => {
        // #0 Set redirect of Go Back button to previous path
        prevPathRef.current = prevPath;
        setPrevPath(props.location.pathname)

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
                    <Link to={{ pathname: '/' }} className="logo">Mulholland Drive</Link>
                    <div className="menu">
                        <Link
                            to={{ pathname: `${prevPathRef.current ? prevPathRef.current : '/'}` }}
                            style={props.location.pathname === '/' ? { display: "none" } :
                                { color: "crimson", display: "inline-block" }}>
                            Go Back
                        </Link>
                        <Link className="clothing-link" >Clothing
                        <DropDownOnHover />
                        </Link>
                        <Link to={{ pathname: '/ContactUs' }}>Contact</Link>
                        {props.isCurrentUserLoggedIn !== null ?
                            <a onClick={() => firebase.auth().signOut()}>Sign Out</a> :
                            <Link to={{ pathname: '/SignInUp' }}>Sign In</Link>}
                        <CartIconCounter />
                    </div>
                    <div onClick={() => setIsActive(prevState => !prevState)} className="hamburger-wrapper">
                        <div className={isActive ? "hamburger-menu active" : "hamburger-menu"}></div>
                    </div>
                </div>
            </header>
            <HiddenMenu isActive={isActive} />
        </React.Fragment >
    )

}
// Redux
const mapStateToProps = state => {
    // console.log('!!!!!!!!!mapStateToProps Header!!!!!!!!!')
    return {
        isCurrentUserLoggedIn: state.rootUsers.currentUser
    }
}

// export default withRouter(Header);
export default connect(mapStateToProps, null)(withRouter(Header))