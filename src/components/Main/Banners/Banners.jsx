import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Banners.scss';
import { banners } from './utils';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

export default function Banners() {
    const app = useRef(null);
    const imagesRef = useRef(null);
    let timeline = new TimelineLite();

    useEffect(() => {
        const currentImages = [...imagesRef.current.children]
        timeline.staggerFrom(currentImages, 1, { y: 40, ease: Power3.easeInOut, delay: .7, opacity: 0.1 }, .15, 'start')
        TweenMax.to(app.current, 1, { visibility: 'visible' })
    }, [])

    return (
        <React.Fragment>
            <div className="items-heading">
                <h2>New Tees are in</h2>
                <p>Shop lightweight fabrics</p>
                <Link to={'./ProductTemplate/Long-Sleeves'} >Check new Long-Sleeves collection</Link>
            </div>
            <div ref={imagesRef} className="flex-parent banners-main">
                {banners.map(product => {
                    return (
                        <div key={product.id} className="flex-item banner">
                            <Link to={{ pathname: `/ProductTemplate/${product.title}` }} >
                                <img src={product.img} />
                                <div className="image-desciption">
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p className="underline">Discover Now</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
                }
            </div>
        </React.Fragment>
    )
}
