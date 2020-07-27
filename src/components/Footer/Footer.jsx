import React, { useEffect } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

function Footer({ location }) {
    console.log('~~~~~~~~~~~~~~~Footer.jsx~~~~~~~~~~~~~~~')
    console.log('location', location);

    useEffect(() => {
        if (location.pathname = '/') {

        }
    }, [])

    const styledFooter = styled.div`
    background: ${location.pathname = '/' ? "white" : "black"};
    display:${location.pathname === '/ContactUs' || location.pathname === '/ShoppingBag' ? "none" : "flex"};
        a {
            color: ${location.pathname = '/' ? "black" : "white"};
            border-radius:${location.pathname = '/' ? "1px solid black" : "1px solid white"}
            }
`;
    return (
        <React.Fragment>
            <styledFooter>
                <div className="product-footer-wrapper">
                    <div className="footer-item left-footer">
                        <h2><Link to={{ pathname: '/' }}>About Us</Link></h2>
                        <h2><Link to={{ pathname: '/ContactUs' }}>Contact</Link></h2>
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
            </styledFooter>
        </React.Fragment>
    )
}

export default withRouter(Footer)
