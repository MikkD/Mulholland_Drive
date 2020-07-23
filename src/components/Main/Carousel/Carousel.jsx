import React, { useState, useRef, useEffect } from 'react'
import './Carousel.css';
import { Sneakers } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CarouselItem from './CarouselItem';


const Carousel = () => {
    const [carouselItems, setCarouselItems] = useState(Sneakers);
    const [sliderItems, setSliderItems] = useState([]);
    // const [currentItem, setCurrentItem] = useState(1);
    // const [translate, setTranslate] = useState(250 * currentItem);
    let currentItem = 1
    let translate = 250 * currentItem


    const handlePrevious = () => {

        console.dir(handlePrevious);
        console.log('currentItem on Previous Button', currentItem);
        // Closure !!! - Translate doesn't change unless i calculate it within 
        console.log('translate on Previous Button', translate);
        sliderItems.map(el => el.style.transform = `translate(-${translate - 250}px)`)
        currentItem--
    }
    useEffect(() => {
        console.log('translate USE EFFECT', translate);
    }, [translate])

    const handleNext = () => {
        // console.dir(translate);
        console.dir(handlePrevious);
        console.log('currentItem on Next Button', currentItem);
        // Closure !!! - Translate doesn't change unless i calculate it within 
        console.log('translate on Next Button', translate);
        sliderItems.forEach(el => el.style.transform = `translate(-${translate}px)`)
        currentItem++

    }

    return (
        <React.Fragment>
            <div className="carousel-main">
                <button onClick={handlePrevious} className="carousel-button prev-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="image-slider">
                    {carouselItems.map((item, index) =>
                        <div ref={el => sliderItems[index] = el}
                            id={index} key={item.id} className="slider-item">
                            <img src={item.image} alt={item.description} />
                        </div>
                    )}
                </div>
                <button onClick={handleNext} className="carousel-button next-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </React.Fragment >
    )
}
export default Carousel;


// WORKING 

// const sliderItemWidth = 250
//     let currentItem = 1;
//     let translate = sliderItemWidth * currentItem;


//     const handlePrevious = () => {
//         translate = sliderItemWidth * (currentItem - 1)
//         sliderItems.map(el => el.style.transform = `translate(-${translate - sliderItemWidth}px)`)
//         currentItem--
//     }

//     const handleNext = () => {
//         sliderItems.forEach(el => el.style.transform = `translate(-${translate}px)`)
//         currentItem++
//         translate = sliderItemWidth * currentItem
//     }
