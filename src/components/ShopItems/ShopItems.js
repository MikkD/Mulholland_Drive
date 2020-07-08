import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShopItems.css';
import Footer from '../ProductTemplate/Footer/Footer';


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
                    img: "./img/pants1.png"
                },
                {
                    title: 'Sneakers',
                    img: "./img/sneakers1.jpg"
                },
                {
                    title: 'Shirts',
                    img: "./img/shirts.png"
                },
                {
                    title: 'Accessories',
                    img: "./img/accessories3.jpg"
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
                                    <Link to={`/ProductTemplate/${title}`}>
                                        <img className="image-item" src={require(`${img}`)} />
                                        <div className="image-desciption">
                                            <h2>{title}</h2>
                                            <p>{description}</p>
                                            <Link to={`/ProductTemplate/${title}`}>Discover Now</Link>
                                        </div>
                                    </Link>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <Footer style={{ background: '#1d1d23' }} />
            </React.Fragment>
        )
    }
}

export default ShopItems;