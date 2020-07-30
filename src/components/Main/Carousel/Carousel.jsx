import React from 'react'
import './Carousel.css';
import { Sneakers, headerStyles, pStyles } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'


const Carousel = () => {
    const sliderItems = []
    const carouselItems = Sneakers
    const sliderItemWidth = 260
    let currentItem = 1;
    let translate = sliderItemWidth * currentItem;

    const handlePrevious = () => {
        if (currentItem - 1 > 0) {
            translate = sliderItemWidth * (currentItem - 1)
            sliderItems.map(el => el.style.transform = `translate(-${translate - sliderItemWidth}px)`)
            currentItem--
        }
    }

    const handleNext = () => {
        if (currentItem > carouselItems.length - 4) {
            currentItem = 1
        }
        sliderItems.forEach(el => el.style.transform = `translate(-${translate}px)`)
        currentItem++
        translate = sliderItemWidth * currentItem
    }

    return (
        <React.Fragment>
            <div className="items-heading">
                <h2 style={headerStyles}> Sneakers</h2>
                <p style={pStyles}>Shop Men's Shoes and Sneakers</p>
            </div>
            <div className="carousel-main">
                <button onClick={handlePrevious} className="carousel-button prev-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="image-slider">
                    <Link style={{ display: "-webkit-inline-box" }} to={'/ProductTemplate/Sneakers'}>
                        {carouselItems.map((item, index) =>
                            <div ref={el => sliderItems[index] = el}
                                id={index} key={uuid()} className="slider-item">
                                <img src={item.image} alt={item.description} />
                            </div>
                        )}
                    </Link>
                </div>
                <button onClick={handleNext} className="carousel-button next-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </React.Fragment >
    )
}
export default Carousel;


