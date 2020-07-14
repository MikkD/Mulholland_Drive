import React, { useState } from 'react';
import './QuantityDropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { action_pagination_number } from '../../../redux/pagination/pagination.action';


function QuantityDropDown(props) {
    const { totalNumberOfPages, clickedPaginationPage } = props
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    const DropDownOptions = Array.from(Array(totalNumberOfPages).keys())


    const handlePageNumber = (e) => {
        const pageClicked = parseInt(e.target.innerText);
        clickedPaginationPage(pageClicked)

    }

    return (
        <React.Fragment>
            {window.innerWidth > 450 ?
                <div className="quantity-filter">
                    <button
                        // onBlur={() => setDropDownIsOpen(prevState => false)}
                        onClick={() => setDropDownIsOpen(prevState => !prevState)}
                        className="dropdown-button regular-button">
                        <FontAwesomeIcon className="arrow-icon"
                            style={DropDownIsOpen ? { transform: 'rotate(180deg)', top: '0' } : null} icon={faSortUp} />
                                1</button> of {DropDownOptions.length}
                    {DropDownIsOpen ?
                        <ul className="dropdown-items-quantity">
                            {DropDownOptions.map((number, index) => <li
                                onClick={handlePageNumber}
                                key={index} className="dropdown-item">{number + 1}</li>)}
                        </ul> :
                        null}

                    <button className="regular-button">View All</button>
                </div>
                : null}
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    totalNumberOfPages: state.pagination.totalNumberOfPages
})
const disptachStateToProps = dispatch => ({
    clickedPaginationPage: (pageClicked) => dispatch(action_pagination_number(pageClicked))
})

export default connect(mapStateToProps, disptachStateToProps)(QuantityDropDown)