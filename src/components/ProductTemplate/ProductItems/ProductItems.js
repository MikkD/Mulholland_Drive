import React, { Component } from 'react';
import { getProduct } from '../utils';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ProductItems.css';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';

export class ProductItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: getProduct(props.match.params.product)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="product-items-wrapper">
                    {this.state.items.map((item, index) => {
                        return (
                            <div key={index} className="product-item-tile">
                                <Link to={{ pathname: '/' }} className="product-item-link-wrapper" >
                                    <img src={item.image} alt="product" />
                                    <Link to={{ pathname: '/' }} className="regular-button">Add to Cart</Link>
                                </Link>
                                <div className="product-item-tile-description">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                    <ScrollToTopButton />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ProductItems)
