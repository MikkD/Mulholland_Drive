
export const signUpSlide = ({ signUpOverlay, signInOverlay, signInForm, signUpForm }) => {
    // signUpverlay - Right / Moved to the left and make it dissapear
    dissapear(signUpOverlay, 'translateX(-100%)');
    // signInOverlay - Left / Made it visibble with sliding effect
    showUp(signInOverlay, 'translateX(0%)');
    // signInForm - Left  /  Moved to right and make it dissapear
    dissapear(signInForm, 'translateX(100%)');
    // signUpForm - Right  /  Made it visible with sliding effect
    showUp(signUpForm, 'translateX(0%)');
}
export const signInSlide = ({ signUpOverlay, signInOverlay, signInForm, signUpForm }) => {
    // signInOverlay - Left / Moved to right and make it dissapear
    dissapear(signInOverlay, 'translateX(100%)');
    // SignUpForm - right / Moved to left and make it dissapear
    dissapear(signUpForm, 'translateX(-100%)');
    // SignUpOverlay - left / Moved to right and make it visible
    showUp(signUpOverlay, 'translateX(0%)');
    // SignUpOverlay - / Made it visible with sliding effect
    showUp(signInForm, 'translateX(0%)');
}
export const showUp = (element, translate) => {
    element.current.style.transform = `${translate}`;
    element.current.style.opacity = '1';
    element.current.style.zIndex = '1';
}
export const dissapear = (element, translate) => {
    element.current.style.transform = `${translate}`;
    element.current.style.opacity = '0';
    element.current.style.zIndex = '0';
}

