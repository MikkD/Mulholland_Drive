import React from 'react';
import './Pagination.css';
import uuid from 'react-uuid'


function Pagination({ totalNumberOfPages, clickedPageNumber, handleFilterByPageNumber }) {
    const numberOfPaginationPages = [...Array(totalNumberOfPages).keys()]
    return (
        <React.Fragment>
            <div className="pagination">
                <div className="pagi-wrapper">
                    {clickedPageNumber != 1 ?
                        <a onClick={() => handleFilterByPageNumber(parseInt(clickedPageNumber) - 1)}>
                            &laquo;<span className="pagination-span">Previous</span>
                        </a> : null}
                    {numberOfPaginationPages.map(pageNumber =>
                        <a style={pageNumber + 1 == clickedPageNumber ? { backgroundColor: '#d73e15' } :
                            { backgroundColor: 'transparent' }}
                            key={uuid()}
                            onClick={(e) => handleFilterByPageNumber(e.target.innerHTML)}
                        >{parseInt(pageNumber) + 1}</a>
                    )}
                    {clickedPageNumber != totalNumberOfPages ?
                        <a onClick={() => handleFilterByPageNumber(parseInt(clickedPageNumber) + 1)}>
                            <span className="pagination-span">Next</span>&raquo;
                    </a> : null}
                </div>
            </div>
        </React.Fragment >
    )
}

export default Pagination
