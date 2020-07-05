import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jackets.css';
import Header from '../../../Header/Header';
import './img/jacket1.jpg';

class Jackets extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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
                                <button>Dropdown<span></span></button>
                            </div>
                            <div className="quantity-filter">
                                <a className="dropdown-button regular-button"><span></span>1</a> of 7  <a className="regular-button">View All</a>
                            </div>
                        </div>
                        <div className="product-items-wrapper">

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
                    {/* <div className="product-footer">
                        footer
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Jackets
