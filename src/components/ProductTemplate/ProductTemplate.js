import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductTemplate.css';
import Header from '../Header/Header';
import DropDownMenu from '../ProductTemplate/DropdownMenu/DropdownMenu';
import QuantityDropDown from '../ProductTemplate/QuantityDropDown/QuantityDropDown';
import Pagination from './Pagination/Pagination';
import ProductItems from './ProductItems/ProductItems';
import Footer from './Footer/Footer';

class ProductTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: window.innerWidth
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
                    <Header />
                    <div className="single-product-wrapper">
                        <h2>{this.props.match.params.product}<span className="dot"></span></h2>
                        <div className="product-filter">
                            <DropDownMenu />
                            <QuantityDropDown />
                        </div>
                        <ProductItems />
                    </div>
                    <Pagination />
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default ProductTemplate;
