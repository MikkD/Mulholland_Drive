import React, { useState } from 'react';
import './DropdownMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { action_filterItemByProduct } from '../../../redux/filterItems/filterItems.action';
import { action_filterItemByPriceLowToHigh } from '../../../redux/filterItems/filterItems.action';
import { action_filterItemByPriceHighToLow } from '../../../redux/filterItems/filterItems.action';


function DropDownMenu(props) {
    const { filterItemByProduct, filterItemByPriceLowToHigh, filterItemByPriceHighToLow } = props;
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    const DropDownOptions = ['By category', 'Price: Low to high', 'Price: High to low']

    const filterItem = function (event) {
        switch (event.target.id) {
            case '0':
                filterItemByProduct();
                break
            case '1':
                filterItemByPriceLowToHigh();
                break
            case '2':
                filterItemByPriceHighToLow();
                break
            default:
                filterItemByProduct();
        }
    }

    return (
        <React.Fragment>
            <div className="dropdown" >
                <button

                    // onBlur={() => setDropDownIsOpen(false)}
                    onClick={() => setDropDownIsOpen(prevState => !prevState)}
                    className="regular-button dropdown-button">Filter
                    <FontAwesomeIcon
                        style={DropDownIsOpen ? { transform: 'rotate(180deg)', top: '0' } : null}
                        className="arrow-icon" icon={faSortUp} />
                </button>
                {DropDownIsOpen ? <ul className="dropdown-items">
                    {DropDownOptions.map((option, index) =>
                        <li onClick={filterItem}
                            key={index} id={index} className="dropdown-item">{option}</li>)}
                </ul> : null}

            </div>

        </React.Fragment >
    )
}

const dispathStateToProps = dispatch => ({
    filterItemByProduct: () => dispatch(action_filterItemByProduct()),
    filterItemByPriceLowToHigh: () => dispatch(action_filterItemByPriceLowToHigh()),
    filterItemByPriceHighToLow: () => dispatch(action_filterItemByPriceHighToLow())
})

export default connect(null, dispathStateToProps)(DropDownMenu)


