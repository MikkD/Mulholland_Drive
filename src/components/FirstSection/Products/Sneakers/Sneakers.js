import React, { Component } from 'react';
import './Sneakers.css';
// import Header from '../../../Header/Header';

class Sneakers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                <div className="jackets">
                    Sneakers
                </div>
            </React.Fragment>
        )
    }
}

export default Sneakers
