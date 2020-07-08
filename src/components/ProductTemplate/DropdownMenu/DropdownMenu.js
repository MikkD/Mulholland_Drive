import React, { useState } from 'react';
import './DropdownMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

function DropDownMenu() {
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    const DropDownOptions = ['By category', 'Price: High to low', 'Price: Low to high']


    return (
        <React.Fragment>
            <div className="dropdown">
                <button
                    onBlur={() => setDropDownIsOpen(false)}
                    onClick={() => setDropDownIsOpen(prevState => !prevState)}
                    className="regular-button dropdown-button">Filter
                    <FontAwesomeIcon
                        style={DropDownIsOpen ? { transform: 'rotate(180deg)', top: '0' } : null}
                        className="arrow-icon" icon={faSortUp} />
                </button>
                {DropDownIsOpen ? <ul className="dropdown-items">
                    {DropDownOptions.map((option, index) => <li key={index} className="dropdown-item">{option}</li>)}
                </ul> : null}

            </div>

        </React.Fragment>
    )
}

export default DropDownMenu


