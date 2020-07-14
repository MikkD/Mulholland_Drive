import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Pagination.css';
import { connect } from 'react-redux';
import nextId from 'react-id-generator';
import { action_pagination_number } from '../../../redux/pagination/pagination.action';


function Pagination(props) {
    const { totalNumberOfPages, clickedPaginationNumber, dispatchClickedPageNumber, showAllItems } = props;
    const numberOfPaginationPages = [...Array(totalNumberOfPages).keys()]



    const handlePaginationPageNumber = (event) => {
        if (event.target.innerHTML === 'Next') {
            console.log('clickedPaginationNumber if Next', clickedPaginationNumber)
            dispatchClickedPageNumber(clickedPaginationNumber + 1)
        } else if (event.target.innerHTML === 'Previous') {
            console.log('clickedPaginationNumber if Previous', clickedPaginationNumber)
            dispatchClickedPageNumber(clickedPaginationNumber - 1)
        }
        else {
            let clickedPageNumber = parseInt(event.target.innerHTML);
            dispatchClickedPageNumber(clickedPageNumber)
        }
    }


    return (
        <React.Fragment>
            <div style={showAllItems ? { display: 'none' } : { display: 'block' }} className="pagination">
                <div className="pagi-wrapper">
                    <a style={clickedPaginationNumber === 1 ? { display: 'none' } : { display: 'inline-block' }}
                        onClick={handlePaginationPageNumber} href="#">&laquo;<span className="pagination-span">Previous</span></a>
                    {numberOfPaginationPages.map((pageNumber, index) =>
                        <a key={nextId()}
                            onClick={handlePaginationPageNumber}
                            href="#">{parseInt(pageNumber) + 1}</a>
                    )}
                    <a style={clickedPaginationNumber === totalNumberOfPages ? { display: 'none' } : { display: 'inline-block' }}
                        onClick={handlePaginationPageNumber} href="#"><span className="pagination-span">Next</span>&raquo;</a>
                </div>
            </div>
        </React.Fragment >
    )
}

const mapStateToProps = state => ({
    totalNumberOfPages: state.pagination.totalNumberOfPages,
    clickedPaginationNumber: state.pagination.clickedPaginationNumber,
    showAllItems: state.pagination.showAllItems,
})

const dispatchStateToProps = dispatch => ({
    dispatchClickedPageNumber: (clickedPageNumber) => dispatch(action_pagination_number(clickedPageNumber))
})
export default connect(mapStateToProps, dispatchStateToProps)(Pagination)
