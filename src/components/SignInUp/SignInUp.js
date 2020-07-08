import React, { useRef } from 'react';
import './SignInUp.scss';

function SignInUp() {
    const signUpOverlay = useRef()
    const signInOverlay = useRef()
    const signUpForm = useRef()
    const signInForm = useRef()

    const signUpSlide = () => {
        // signUpverlay - Right / Moved to the left and make it dissapear
        dissapear(signUpOverlay, 'translateX(-100%)');
        // signInOverlay - Left / Made it visibble with sliding effect
        showUp(signInOverlay, 'translateX(0%)');
        // signInForm - Left  /  Moved to right and make it dissapear
        dissapear(signInForm, 'translateX(100%)');
        // signUpForm - Right  /  Made it visible with sliding effect
        showUp(signUpForm, 'translateX(0%)');
    }

    const signInSlide = () => {
        // signInOverlay - Left / Moved to right and make it dissapear
        dissapear(signInOverlay, 'translateX(100%)');
        // SignUpForm - right / Moved to left and make it dissapear
        dissapear(signUpForm, 'translateX(-100%)');
        // SignUpOverlay - left / Moved to right and make it visible
        showUp(signUpOverlay, 'translateX(0%)');
        // SignUpOverlay - / Made it visible with sliding effect
        showUp(signInForm, 'translateX(0%)');
    }
    const showUp = (element, translate) => {
        // console.log(`element.current BEFORE`, element.current)
        element.current.style.transform = `${translate}`;
        element.current.style.opacity = '1';
        element.current.style.zIndex = '1';
        // console.log('element.current AFTER', element.current)
    }
    const dissapear = (element, translate) => {
        element.current.style.transform = `${translate}`;
        element.current.style.opacity = '0';
        element.current.style.zIndex = '0';
    }

    return (
        <React.Fragment>
            <div className="parent-block">
                <div className="flex-main">
                    <div ref={signInForm} className="flex-sign-in-left">
                        <h2>Sign In</h2>
                        {/* Sign-in-left form */}
                        <form action="#" className="sign-in-form">
                            <div className="icons-container">
                                <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                                <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <h5>Or use your account</h5>
                            <input name="name" placeholder="Name" />
                            <input name="password" placeholder="Password" />
                        </form>
                        <h5>Forgot your password?</h5>
                        <button className="button">Sign in</button>
                    </div>
                    {/* Sign-up-right form */}
                    <div ref={signUpForm} className="flex-sign-up-right">
                        <h2>Create Account</h2>
                        <form action="#" className="sign-up-form">
                            <div className="icons-container">
                                <a href="https://www.facebook.com/login" className="social" ><i className="fab fa-facebook-f"></i></a>
                                <a href="https://accounts.google.com/signin" className="social" ><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.linkedin.com/login" className="social" ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <h5>Or use your email for registration</h5>
                            <input name="name" placeholder="Name" />
                            <input name="email" placeholder="Email" />
                            <input name="password" placeholder="Password" />
                        </form>
                        <button className="button">Sign Up</button>
                    </div>
                    {/* Overlay */}
                    <div className="overlay-container">
                        <div className="overlay">
                            <div ref={signInOverlay} className="overlay-panel sign-in-overlay">
                                <h2>Welcome Back</h2>
                                <h5>Enter your personal details and start journey with us</h5>
                                <button
                                    onClick={signInSlide}
                                    className="button overlay-sign-in-button">Sign In</button>
                            </div>

                            <div ref={signUpOverlay} className="overlay-panel sign-up-overlay">
                                <h2>Hello Friend</h2>
                                <h5>To keep connected with us please login with your personal info</h5>
                                <button
                                    onClick={signUpSlide}
                                    className="button overlay-sign-up-button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    {/* End of overlay */}
                </div>
            </div>
        </React.Fragment>
    )
}
export default SignInUp