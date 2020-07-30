import React, { useEffect } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


function Footer({ location }) {

    const StyledFooter = styled.div`
    background: ${location.pathname === '/' ? "whitesmoke" : "black"};
    display:${location.pathname === '/ContactUs' || location.pathname === '/ShoppingBag' || location.pathname === '/SignInUp' ? "none" : "flex"};
    margin-top:50px;
    .social{
        color: ${location.pathname === '/' ? "black" : "whitesmoke"};
        border:1px solid ${location.pathname === '/' ? "black" : "whitesmoke"};
    }
    a {
        color: ${location.pathname === '/' ? "black" : "white"};
        border-radius:${location.pathname === '/' ? "1px solid black" : "1px solid white"}
    } 
    `;
    return (
        <React.Fragment>
            <StyledFooter>
                <div className="product-footer-wrapper">
                    <div className="footer-item">
                        <h2><Link to={{ pathname: '/' }}>About Us</Link></h2>
                        <h2><Link to={{ pathname: '/ContactUs' }}>Contact</Link></h2>
                        <h2><Link to={{ pathname: '/' }}>Terms</Link></h2>
                    </div>
                    <div className="footer-item">
                        <div className="icons-container">
                            <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                            <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                            <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </StyledFooter>
        </React.Fragment>
    )
};

export default withRouter(Footer)
