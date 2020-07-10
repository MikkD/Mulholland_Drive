// import React, { useRef } from 'react';
// import { signUpSlide, signInSlide } from '../Animations';
// import SignInUp from '../SignInUp';

export default function OverlayContainer() {
    return (
        <React.Fragment>
            <div className="overlay-container">
                <div className="overlay">
                    <div ref={signInOverlay} className="overlay-panel sign-in-overlay">
                        <h2>Welcome Back</h2>
                        <h5>Enter your personal details and start journey with us</h5>
                        <button
                            onClick={() => signInSlide({ signUpOverlay, signInOverlay, signInForm, signUpForm })}
                            className="button overlay-sign-in-button">Sign In</button>
                    </div>

                    <div ref={signUpOverlay} className="overlay-panel sign-up-overlay">
                        <h2>Hello Friend</h2>
                        <h5>To keep connected with us please login with your personal info</h5>
                        <button
                            onClick={() => signUpSlide({ signUpOverlay, signInOverlay, signInForm, signUpForm })}
                            className="button overlay-sign-up-button">Sign Up</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
