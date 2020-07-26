import React, { useState, useEffect } from 'react';
import './ProductTemplate.css';
import Pagination from './Pagination/Pagination';
import ProductItems from './ProductItems/ProductItems';
import ProductFilter from './ProductFilter/ProductFilter';

const ProductTemplate = (props) => {
    const [totalNumberOfPages, setTotalNumberOfPages] = useState()
    const [filterTypes, setFilterTypes] = useState({
        filterItemByProduct: false,
        filterItemByPriceLowToHigh: false,
        filterItemByPriceHighToLow: false
    });
    const [clickedPageNumber, setClickedPageNumber] = useState(1)
    const [showAllItemsFilter, setShowAllItemsFilter] = useState(false);

    const handleFilter = (filterType) => setFilterTypes(filterType)

    const handleFilterByPageNumber = (number) => {
        window.scrollTo(0, 0)
        setClickedPageNumber(number)
    }

    const handleShowAllItem = () => {
        setShowAllItemsFilter(prevState => !prevState)
    }

    const handleTotalNumberOfPages = (numberOfPages) => {
        setTotalNumberOfPages(numberOfPages)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])






    console.log('========>Product Template<============')
    return (
        < React.Fragment >
            <div className="main-product-section">
                <div className="single-product-wrapper">
                    <h2>{props.match.params.product}</h2>
                    {totalNumberOfPages > 0 ?
                        < ProductFilter
                            clickedPageNumber={clickedPageNumber}
                            handleShowAllItem={handleShowAllItem}
                            handleFilterByPageNumber={handleFilterByPageNumber}
                            totalNumberOfPages={totalNumberOfPages}
                            handleFilter={handleFilter} /> : null}
                    <ProductItems
                        clickedPageNumber={clickedPageNumber}
                        showAllItemsFilter={showAllItemsFilter}
                        handleTotalNumberOfPages={handleTotalNumberOfPages}
                        filterTypes={filterTypes} />
                </div>
                {!showAllItemsFilter ?
                    <Pagination
                        clickedPageNumber={clickedPageNumber}
                        handleFilterByPageNumber={handleFilterByPageNumber}
                        totalNumberOfPages={totalNumberOfPages} /> : null}
            </div>
        </React.Fragment >
    )
}

export default ProductTemplate;
