import React, { Component } from 'react';
import Hero from './Hero/Hero';
import ShopItems from './ShopItems/ShopItems';

export class FirstSection extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <ShopItems />
            </React.Fragment>
        )
    }
}

export default FirstSection
