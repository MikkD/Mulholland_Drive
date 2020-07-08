import React from 'react';
import './ScrollToTopButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



export default function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (<React.Fragment>
        <FontAwesomeIcon onClick={scrollToTop} className="to-top-button" icon={faArrowUp} size="lg" />
    </React.Fragment>
    )
}
