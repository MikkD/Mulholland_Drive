import React from 'react';
import { Link } from 'react-router-dom';
import './ShopItems.css';
import { pageProducts } from './utils';



const ShopItems = () => {
    console.log('========>Shop Items<============')

    return (
        <React.Fragment>
            <div className="items-heading">
                <h2>New Arrivals</h2>
                <p>Check out our latest arrivals for the upcoming season</p>
                <Link to={'./ProductTemplate/Jeans'} >See full Jeans collection here</Link>
            </div>
            <div className="all-items-section">
                <div className="flex-parent">
                    {pageProducts.map(el => {
                        const { id, title, description, img } = el;
                        return (
                            <div key={id} className="flex-item">
                                <Link to={`/ProductTemplate/${title}`}>
                                    <img className="image-item" src={img} />
                                    <div className="image-desciption">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <p className="underline">Discover Now</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShopItems;