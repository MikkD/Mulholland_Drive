import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './ScrollToTopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';



function ScrollToTopButton(props) {
    const [offsetHeight, setOffsetHeight] = useState(document.documentElement.offsetHeight);
    const [bottomOfThePage, setBottomOfThePage] = useState(window.innerHeight + window.pageYOffset);

    const handleToTopButton = () => {
        setOffsetHeight(document.documentElement.offsetHeight)
        setBottomOfThePage(window.innerHeight + window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleToTopButton)
        setOffsetHeight(document.documentElement.offsetHeight)
        setBottomOfThePage(window.innerHeight + window.pageYOffset)

        return () => {
            window.removeEventListener('scroll', handleToTopButton)
        }
    }, [props.location.pathname]);


    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <React.Fragment>
            {offsetHeight - bottomOfThePage < 500 && offsetHeight != 0 ? < div >
                <styledButton>
                    <FontAwesomeIcon
                        onClick={scrollToTop}
                        style={props.location.pathname !== '/' ? { backgroundColor: 'black' } :
                            { backgroundColor: 'transparent' }}
                        className="to-top-button" icon={faLongArrowAltUp}
                    />
                </styledButton>
            </div> : null
            }
        </React.Fragment >
    )
}

export default withRouter(ScrollToTopButton)