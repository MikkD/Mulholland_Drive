import React from 'react';
import './Pagination.css';


function Pagination(props) {
    const { totalNumberOfPages, clickedPageNumber, showAllItemsFilter, handleFilterByPageNumber } = props;
    const numberOfPaginationPages = [...Array(totalNumberOfPages).keys()]


    return (
        <React.Fragment>
            <div className={showAllItemsFilter ? "pagination hidden" : "pagination"}>
                <div className="pagi-wrapper">
                    <a style={clickedPageNumber == 1 ? { display: 'none' } : { display: 'inline-block' }}
                        onClick={() => handleFilterByPageNumber(parseInt(clickedPageNumber) - 1)}
                        href="#">&laquo;<span className="pagination-span">Previous</span></a>
                    {numberOfPaginationPages.map((pageNumber, index) =>
                        <a
                            style={pageNumber + 1 === clickedPageNumber ? { backgroundColor: '#d73e15' } : { backgroundColor: 'none' }}
                            key={index}
                            onClick={(e) => handleFilterByPageNumber(e.target.innerHTML)}
                            href="#">{parseInt(pageNumber) + 1}</a>
                    )}
                    <a style={clickedPageNumber == totalNumberOfPages ? { display: 'none' } : { display: 'inline-block' }}
                        onClick={() => handleFilterByPageNumber(parseInt(clickedPageNumber) + 1)}>
                        <span className="pagination-span">Next</span>&raquo;</a>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Pagination
