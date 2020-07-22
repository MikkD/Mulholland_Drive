import React from 'react';
import { Link } from 'react-router-dom';
import './ShopItems.css';
import { pageProducts } from './utils';



const ShopItems = () => {

    return (
        <React.Fragment>
            <div className="all-items-section">
                <div className="items-heading">
                    <h2>New Arrivals</h2>
                    <p>Check out our latest arrivals for the upcoming season</p>
                    {/* <a href="#" >See full collection here</a> */}
                    <p className="underline">See full collection here</p>
                </div>
                <div className="flex-parent">
                    {pageProducts.map(el => {
                        const { id, title, description, img } = el;
                        console.log('img', img)
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