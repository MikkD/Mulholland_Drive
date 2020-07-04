import React, { Component } from 'react';
import './ShopItems.css';

class ShopItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shopOptions: [
                {
                    title: 'Men',
                    description: 'Get lost in a world of blue denim and beautiful details.',
                    img: "./img/man.jpg"
                },
                {
                    title: 'Women',
                    description: 'Get lost in a world of blue denim and beautiful details.',
                    img: "./img/man2.jpg"
                },
                {
                    title: 'Jackets',
                    img: "./img/jacket.jpg"
                },
                {
                    title: 'Pants',
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
                                    <img clasName="image-item" src={require(`${img}`)} />
                                    <div className="image-desciption">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <a>Discover Now</a>
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