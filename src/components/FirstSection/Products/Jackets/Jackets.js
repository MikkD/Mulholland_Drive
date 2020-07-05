import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jackets.css';
import Header from '../../../Header/Header';
import './img/jacket1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';


class Jackets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.setState({ viewport: window.innerWidth }))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', () => { })
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-product-section">
                    <Header />
                    {/* Product */}
                    <div className="single-product-wrapper">
                        <h2>JACKETS<span className="dot"></span></h2>
                        <div className="product-filter">
                            <div className="dropdown">
                                <button className="regular-button dropdown-button">Filter<FontAwesomeIcon className="arrow-icon" icon={faSortUp} /> </button>
                            </div>
                            {this.state.viewport > 450 ?
                                <div className="quantity-filter">
                                    <button className="dropdown-button regular-button"><FontAwesomeIcon className="arrow-icon" icon={faSortUp} />
                                1</button> of 7  <a className="regular-button">View All</a>
                                </div>
                                : null}

                        </div>
                        <div className="product-items-wrapper">

                            <div className="product-item-tile">
                                <Link className="product-item-link-wrapper" >
                                    <img src={require('./img/jacket1.jpg')} to={{ pathname: '/' }} />
                                    <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                </Link>
                                <div className="product-item-tile-description">
                                    <p>Dock Short Sleeve Jacket</p>
                                    <p>130$</p>
                                </div>
                            </div>


                            <div className="product-item-tile">
                                <a className="product-item-link-wrapper" href="#">
                                    <img src={require('./img/jacket1.jpg')} />
                                    <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                </a>
                                <div className="product-item-tile-description">
                                    <p>Dock Short Sleeve Jacket</p>
                                    <p>130$</p>
                                </div>
                            </div>


                            <div className="product-item-tile">
                                <a className="product-item-link-wrapper" href="#">
                                    <img src={require('./img/jacket1.jpg')} />
                                    <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                </a>
                                <div className="product-item-tile-description">
                                    <p>Dock Short Sleeve Jacket</p>
                                    <p>130$</p>
                                </div>
                            </div>

                            <div className="product-item-tile">
                                <a className="product-item-link-wrapper" href="#">
                                    <img src={require('./img/jacket1.jpg')} />
                                    <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                </a>
                                <div className="product-item-tile-description">
                                    <p>Dock Short Sleeve Jacket</p>
                                    <p>130$</p>
                                </div>
                            </div>

                            <div className="product-item-tile">
                                <a className="product-item-link-wrapper" href="#">
                                    <img src={require('./img/jacket1.jpg')} />
                                    <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                </a>
                                <div className="product-item-tile-description">
                                    <p>Dock Short Sleeve Jacket</p>
                                    <p>130$</p>
                                </div>
                            </div>

                            <div className="product-item-tile">
                                <a className="product-item-link-wrapper" href="#">
                                    <img src={require('./img/jacket1.jpg')} />
                                    <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                </a>
                                <div className="product-item-tile-description">
                                    <p>Dock Short Sleeve Jacket</p>
                                    <p>130$</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Footer */}
                    <div className="product-footer">
                        <div className="product-footer-wrapper">
                            <div className="footer-item left-footer">
                                <h2><Link to={{ pathname: '/' }}>About Us</Link></h2>
                                <h2><Link to={{ pathname: '/' }}>Contact</Link></h2>
                                <h2><Link to={{ pathname: '/' }}>Terms</Link></h2>
                            </div>

                            <div className="footer-item  middle-footer">
                                <div className="icons-container">
                                    <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                                    <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            {/* <div className="footer-item  right-footer">
                                <p></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Jackets
