import React, { Component } from 'react';
import './Jeans.css';
// import Header from '../../../Header/Header';

class Jeans extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <div className="product-wrapper">
                    Jeans
                </div>
            </React.Fragment>
        )
    }
}

export default Jeans
