import React, { useState, useRef, useEffect } from 'react';
import './ProductFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';



export default function ProductFilter(props) {
    const { totalNumberOfPages, clickedPageNumber } = props;
    const DropDownOptions = ['By category', 'Price: Low to high', 'Price: High to low'];
    const DropDownPageNumberOptions = Array.from(Array(totalNumberOfPages).keys());
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    const [pageNumberDropDownIsOpen, setPageNumberDropDownIsOpen] = useState(false);
    const [showAllItems, setShowAllItems] = useState(false);
    const filterItem = function (event) {
        // switch (event.target.id) {
        //     case '0':
        //         props.handleFilter(0)
        //         break
        //     case '1':
        //         props.handleFilter(1)

        //         break
        //     case '2':
        //         props.handleFilter(2)
        //         break
        //     default:
        //         props.handleFilter(0)
        // }

        props.handleFilter(event.target.innerHTML)
    }

    const handlePageNumber = (e) => {
        const pageClicked = parseInt(e.target.innerText);
        props.handleFilterByPageNumber(pageClicked)
    }
    const handelShowAllItems = () => {
        setShowAllItems(prevState => !prevState)
        props.handleShowAllItem()
    }


    return (
        <React.Fragment>
            <div className="product-filter">
                <div className="dropdown" >
                    <button
                        onClick={() => setDropDownIsOpen(prevState => !prevState)}
                        className="regular-button dropdown-button">Filter
            <FontAwesomeIcon
                            style={DropDownIsOpen ? { transform: 'rotate(180deg)', top: '0' } : null}
                            className="arrow-icon" icon={faSortUp} />
                    </button>
                    {DropDownIsOpen ?
                        <ul className="dropdown-items">
                            {DropDownOptions.map((option, index) =>
                                <li onClick={filterItem}
                                    key={index} id={index} className="dropdown-item">{option}</li>)}
                        </ul> : null}
                </div>
                <div className="quantity-filter">
                    <button
                        onClick={() => setPageNumberDropDownIsOpen(prevState => !prevState)}
                        className="dropdown-button regular-button">
                        <FontAwesomeIcon className="arrow-icon"
                            style={pageNumberDropDownIsOpen ? { transform: 'rotate(180deg)', top: '0' } : null} icon={faSortUp} />
                        {clickedPageNumber}</button> of {DropDownPageNumberOptions.length}
                    {pageNumberDropDownIsOpen ?
                        <ul className="dropdown-items-quantity">
                            {DropDownPageNumberOptions.map((number, index) => <li
                                onClick={handlePageNumber}
                                key={index} className="dropdown-item">{number + 1}</li>)}
                        </ul> :
                        null}
                    <button
                        onClick={handelShowAllItems}
                        className="regular-button">
                        {showAllItems ? 'Collapse' : 'Show All'}
                    </button>
                </div>
            </div>
        </React.Fragment >

    )
}



