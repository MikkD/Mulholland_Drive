import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductTemplate.css';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { getProduct } from './utils';
import { withRouter } from 'react-router-dom';
import DropDownMenu from '../ProductTemplate/DropdownMenu/DropdownMenu';


class ProductTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: window.innerWidth,
            items: getProduct(props.match.params.product)
        }
        this.handleViewport = this.handleViewport.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener('resize', this.handleViewport)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleViewport)
    }

    handleViewport() {
        this.setState({ viewport: window.innerWidth })
    }


    render() {
        return (
            <React.Fragment>
                <div className="main-product-section">
                    {/* <Header /> */}
                    <Header />
                    {/* Product */}
                    <div className="single-product-wrapper">
                        <h2>{this.props.match.params.product}<span className="dot"></span></h2>
                        {/* Filter */}

                        <div className="product-filter">
                            <DropDownMenu />


                            {this.state.viewport > 450 ?
                                <div className="quantity-filter">
                                    <button className="dropdown-button regular-button"><FontAwesomeIcon className="arrow-icon" icon={faSortUp} />
                                1</button> of 7  <a className="regular-button">View All</a>
                                </div>
                                : null}

                        </div>


                        <div className="product-items-wrapper">
                            {this.state.items.map((item, index) => {
                                return (
                                    <div key={index} className="product-item-tile">
                                        <Link className="product-item-link-wrapper" >
                                            <img src={item.image} to={{ pathname: '/' }} />
                                            <Link to={{ pathname: '/' }} className="regular-button">Shop Now</Link>
                                        </Link>
                                        <div className="product-item-tile-description">
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ProductTemplate)
