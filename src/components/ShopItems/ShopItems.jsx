import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './ShopItems.css';
import { pageProducts } from './utils';
import { TweenMax, TimelineLite, Power3 } from 'gsap';




const ShopItems = () => {
    console.log('========>Shop Items<============')
    const app = useRef(null);
    const imagesRef = useRef(null)
    let timeline = new TimelineLite()
    const refArray = []

    useEffect(() => {
        // #1 Copy of children
        const currentImages = [...imagesRef.current.children]
        // currentImages.map(img => timeline.from(img, 1, { y: 80, ease: Power3.easeInOut }))
        timeline.staggerFrom(currentImages, 1, { y: 40, ease: Power3.easeInOut, delay: .7, opacity: 0.1 }, .15, 'start')
        // #2 ArrayOfRefs
        // refArray.map(img => timeline.from(img, 1, { y: 80, ease: Power3.easeInOut }))
        TweenMax.to(app.current, 1, { visibility: 'visible' })



    }, [])



    return (
        <React.Fragment>
            <div className="items-heading">
                <h2>New Arrivals</h2>
                <p>Check out our latest arrivals for the upcoming season</p>
                <Link to={'./ProductTemplate/Jeans'} >See full Jeans collection here</Link>
            </div>
            <div ref={app} className="all-items-section">
                <div ref={imagesRef} className="flex-parent">
                    {pageProducts.map(el => {
                        const { id, title, description, img } = el;
                        return (
                            <div key={id} className="flex-item">
                                <Link to={{ pathname: `/ProductTemplate/${title}` }} >
                                    <img className="image-item" src={img} />
                                    <div className="image-desciption">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <p className="underline">Discover Now</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment >
    )
}

export default withRouter(ShopItems);