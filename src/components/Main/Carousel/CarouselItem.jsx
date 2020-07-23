import React from 'react'

export default function CarouselItem({ isClickedNext, isClickedPrevious, item }) {
    return (
        <React.Fragment>
            <div
                style={isClickedPrevious ? { transform: 'translate(-200px)' } : { transform: '0px' }}
                style={isClickedNext ? { transform: 'translate(200px)' } : { transform: '0px' }}
                key={item.id} className="slider-item">
                <img src={item.image} alt="sneaker-1" />
            </div>
        </React.Fragment>
    )
}
