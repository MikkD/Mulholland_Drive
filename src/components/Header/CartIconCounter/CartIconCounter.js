import React from 'react'
import { Link } from 'react-router-dom';
import './CartIconCounter.css';

export default function CartIconCounter() {
    return (
        <React.Fragment>
            <Link to={{ pathname: '/ShoppingBag' }} >
                <div className="shopping-bag-icon">
                    <span>Bag</span>
                    <p className="the-counter">1</p>
                </div>

            </Link>
        </React.Fragment>
    )
}
