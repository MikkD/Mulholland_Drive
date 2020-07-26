import React, { useState, useRef, useEffect } from 'react';
import './Button.scss';
import { useSpring, animated } from 'react-spring';
import image from './kd.jpg';


const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function Button() {
    const [open, toggle] = useState(false)
    const springStyle = useSpring({ opacity: 1, from: { opacity: 0 } })

    const filterRef = useRef()

    const { freq, scale, transform, opacity } = useSpring({
        reverse: open,
        from: { scale: 35, opacity: 1, transform: 'scale(1)', freq: '0.05' },
        to: { scale: 70, opacity: 1, transform: 'scale(1)', freq: '0.122' },
        config: { duration: 100 }
    })



    return (
        <React.Fragment>
            <animated.div style={springStyle}>
                <div onClick={() => toggle(!open)} className="button-container">
                    <div className="main-page">
                        <span className="the-link">ROCKERS</span>
                        <span className="the-link-line"></span>
                    </div>
                    <animated.svg style={transform, opacity}>
                        <filter id="noise"  >
                            <AnimFeTurbulence type="FractalNoise" baseFrequency={freq} result="NOISE" numOctaves="2" id="filterTurbulence" />
                            <AnimFeDisplacementMap ref={filterRef} in="SourceGraphic" in2="NOISE" scale={scale} />
                        </filter>
                    </animated.svg>
                </div>
                {/* <button className="distorted-button">Click Me</button> */}
            </animated.div>
        </React.Fragment>
    )
}


export default Button



