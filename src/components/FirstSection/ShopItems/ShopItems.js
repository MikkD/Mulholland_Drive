import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShopItems.css';
import ProductTemplate from '../Products/ProductTemplate/ProductTemplate';

class ShopItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopOptions: [
                {
                    title: 'Jeans',
                    description: 'Get lost in a world of blue denim and beautiful details.',
                    img: "./img/man.jpg"
                },
                {
                    title: 'Jackets',
                    description: 'Get lost in a world of blue denim and beautiful details.',
                    img: "./img/man2.jpg"
                },
                {
                    title: 'Pants',
                    img: "./img/jacket.jpg"
                },
                {
                    title: 'Shirts',
                    img: "./img/blazer.jpg"
                },
                {
                    title: 'Shoes',
                    img: "./img/jacket.jpg"
                },
                {
                    title: 'Accessories',
                    img: "./img/blazer.jpg"
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="all-items-section">
                    <div className="items-heading">
                        <h2>New Arrivals</h2>
                        <p>Check out our latest arrivals for the upcoming season</p>
                        <a href="#" >See full collection here</a>
                    </div>
                    <div className="flex-parent">
                        {this.state.shopOptions.map((el, index) => {
                            const { title, description, img } = el;
                            return (
                                <div key={index} className="flex-item">
                                    <img className="image-item" src={require(`${img}`)} />
                                    <div className="image-desciption">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        {/* <Link to={`/ProductTemplate/?name=${title}`}>Discover Now</Link> */}
                                        <Link to={`/ProductTemplate/${title}`}>Discover Now</Link>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ShopItems;