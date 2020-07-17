import React, { useState, useRef, useEffect } from 'react';
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
    const handleFilter = (filterType) => {
        switch (filterType) {
            case 0:
                setFilterTypes(prevState => ({
                    ...prevState,
                    filterItemByProduct: true,
                    filterItemByPriceLowToHigh: false,
                    filterItemByPriceHighToLow: false
                }))
                break
            case 1:
                setFilterTypes(prevState => ({
                    ...prevState,
                    filterItemByProduct: false,
                    filterItemByPriceLowToHigh: true,
                    filterItemByPriceHighToLow: false
                }))
                break
            case 2:
                setFilterTypes(prevState => ({
                    ...prevState,
                    filterItemByProduct: false,
                    filterItemByPriceLowToHigh: false,
                    filterItemByPriceHighToLow: true
                }))
                break
        }
    }

    const handleFilterByPageNumber = (number) => {
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



    return (
        <React.Fragment>
            <div className="main-product-section">
                <div className="single-product-wrapper">
                    <h2>{props.match.params.product}</h2>
                    <ProductFilter
                        handleShowAllItem={handleShowAllItem}
                        handleFilterByPageNumber={handleFilterByPageNumber}
                        totalNumberOfPages={totalNumberOfPages}
                        handleFilter={handleFilter} />
                    <ProductItems
                        clickedPageNumber={clickedPageNumber}
                        showAllItemsFilter={showAllItemsFilter}
                        handleTotalNumberOfPages={handleTotalNumberOfPages}
                        filterTypes={filterTypes}
                    />
                </div>
                <Pagination
                    handleFilterByPageNumber={handleFilterByPageNumber}
                    totalNumberOfPages={totalNumberOfPages}
                    clickedPageNumber={clickedPageNumber}
                    showAllItemsFilter={showAllItemsFilter}
                />
            </div>
        </React.Fragment>
    )
}

export default ProductTemplate;
