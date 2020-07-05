import React, { Component } from 'react';
import './Shirts.css';
// import Header from '../../../Header/Header';

class Shirts extends Component {
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
                    Shirts
                </div>
            </React.Fragment>
        )
    }
}

export default Shirts
