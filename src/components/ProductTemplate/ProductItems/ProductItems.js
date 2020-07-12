import React, { useState, useEffect } from 'react';
import { getProduct } from '../utils';
import { withRouter } from 'react-router-dom';
import './ProductItems.css';
import ScrollToTopButton from '../../ScrollToTopButton/ScrollToTopButton';
import nextId from 'react-id-generator';


export const ProductItems = props => {
    const [items, setItems] = useState(getProduct(props.match.params.product))
    const [shoppingBagItem, setShoppingBagItem] = useState()

    const addToShoppingBag = (e) => {
        const id = e.target.id
        const newShoppingBagItem = items.find(item => item.id === id);
        setShoppingBagItem(newShoppingBagItem)
    }



    return (
        <React.Fragment>
            <div className="product-items-wrapper">
                {items.map((item, index) => {
                    return (
                        <div id={item.id} key={index} className="product-item-tile">
                            <div className="product-item-link-wrapper" >
                                <img src={item.image} alt="product" />
                                <button
                                    id={item.id}
                                    onClick={addToShoppingBag}
                                    className="regular-button">Add to Cart</button>
                            </div>
                            <div className="product-item-tile-description">
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <p>{item.price}$</p>
                            </div>
                        </div>
                    )
                })}
                <ScrollToTopButton />
            </div>
        </React.Fragment>
    )
}

export default withRouter(ProductItems)
