import React, { useState, useEffect } from 'react';
import './QuantityDropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

export default function QuantityDropDown() {
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    const DropDownOptions = [1, 2, 3, 4, 5, 6, 7];

    return (
        <React.Fragment>
            {window.innerWidth > 450 ?
                <div className="quantity-filter">
                    <button
                        onBlur={() => setDropDownIsOpen(prevState => false)}
                        onClick={() => setDropDownIsOpen(prevState => !prevState)}
                        className="dropdown-button regular-button">
                        <FontAwesomeIcon className="arrow-icon"
                            style={DropDownIsOpen ? { transform: 'rotate(180deg)', top: '0' } : null} icon={faSortUp} />
                                1</button> of {DropDownOptions.length}
                    {DropDownIsOpen ?
                        <ul className="dropdown-items-quantity">
                            {DropDownOptions.map((number, index) => <li key={index} className="dropdown-item">{number}</li>)}
                        </ul> :
                        null}

                    <a className="regular-button">View All</a>
                </div>
                : null}
        </React.Fragment>
    )
}
