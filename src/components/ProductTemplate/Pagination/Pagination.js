import React from 'react';
import './Pagination.css';

export default function Pagination() {
    return (
        <React.Fragment>
            <div className="pagination">
                <a href="#">&laquo;<span className="pagination-span">Previous</span></a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#"><span className="pagination-span">Next</span>&raquo;</a>
            </div>
        </React.Fragment>
    )
}
