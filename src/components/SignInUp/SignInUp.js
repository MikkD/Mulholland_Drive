import React, { useState, useEffect, useRef, Children } from 'react';
import './SignInUp.scss';
import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from '../../firebase/firebse.utils';
import { addUserToFirestore } from '../../firebase/firebse.utils';
import { signUpSlide, signInSlide } from './Animations';
import firebase from 'firebase';
const auth = firebase.auth();
const firestore = firebase.firestore();



function SignInUp() {
    const signUpOverlay = useRef();
    const signInOverlay = useRef();
    const signUpForm = useRef();
    const signInForm = useRef();


    const [inputValues, setInputValues] = useState({ name: '', password: '', email: '' })
    const [signInAuthErrorMessage, setSignInAuthErrorMessage] = useState('')
    const [signUpAuthErrorMessage, setSignUpAuthErrorMessage] = useState('')

    const handleInputFieldChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }

    // Sign-In
    const handleSingInForm = async (event) => {
        event.preventDefault()
        const { email, password, name } = inputValues;
        if (!password || !email) {
            setSignUpAuthErrorMessage('Fill out all input fields')
            return
        }
        try {
            const { user } = await auth.signInWithEmailAndPassword(email.trim().toString(), password.trim().toString())
            addUserToFirestore(user, name)
        } catch (error) {
            setSignInAuthErrorMessage(error.message);
        }
        setInputValues({ name: '', password: '', email: '' })

    }


    // Sign-Up
    const handleSingUpForm = async (event) => {
        event.preventDefault()
        const { name, password, email } = inputValues;
        if (!name || !password || !email) {
            setSignUpAuthErrorMessage('Fill out all input fields')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email.trim().toString(), password.trim().toString())
            addUserToFirestore(user, name)
        } catch (error) {
            setSignUpAuthErrorMessage(error.message)
        }
        setInputValues({ name: '', password: '', email: '' })
    }




    return (
        <React.Fragment>
            <div className="parent-block">
                <div className="flex-main">
                    {/* Sign-in-left form */}
                    <div ref={signInForm} className="flex-sign-in-left">
                        <h2>Sign In</h2>
                        <form action="#" className="sign-in-form">
                            <div className="icons-container">
                                <a onClick={signInWithFacebook} className="social" ><i className="fab fa-facebook-f"></i></a>
                                <a onClick={signInWithGoogle} className="social" ><i className="fab fa-google-plus-g"></i></a>
                                <a onClick={signInWithTwitter} className="social" ><i className="fab fa-twitter"></i></a>
                            </div>
                            <h5>Or use your account</h5>
                            <input
                                onChange={handleInputFieldChange}
                                value={inputValues.email}
                                name="email"
                                placeholder="Email" />
                            <input
                                value={inputValues.password}
                                onChange={handleInputFieldChange}
                                name="password"
                                type="password"
                                placeholder="Password" />
                            {signInAuthErrorMessage ? <h5 style={{ color: 'crimson' }}>{signInAuthErrorMessage}</h5> : <h5>Forgot your password?</h5>}
                            <button
                                type="submit"
                                onClick={handleSingInForm}
                                className="button">Sign in</button>
                        </form>
                    </div>
                    {/* Sign-up-right form */}
                    <div ref={signUpForm} className="flex-sign-up-right">
                        <h2>Create Account</h2>
                        <form action="#" className="sign-up-form">
                            <div className="icons-container">
                                <a onClick={signInWithFacebook} className="social" ><i className="fab fa-facebook-f"></i></a>
                                <a onClick={signInWithGoogle} className="social" ><i className="fab fa-google-plus-g"></i></a>
                                <a onClick={signInWithTwitter} className="social" ><i className="fab fa-twitter"></i></a>
                            </div>
                            {signUpAuthErrorMessage ? <h5 style={{ color: 'crimson' }} >{signUpAuthErrorMessage}</h5> : <h5>Or use your email for registration</h5>}
                            <input
                                value={inputValues.name}
                                onChange={handleInputFieldChange}
                                name="name"
                                placeholder="Name" />
                            <input
                                value={inputValues.password}
                                onChange={handleInputFieldChange}
                                type="password"
                                name="password"
                                placeholder="Password" />
                            <input
                                value={inputValues.email}
                                onChange={handleInputFieldChange}
                                name="email"
                                placeholder="Email" />
                            <button
                                type="submit"
                                onClick={handleSingUpForm}
                                className="button">Sign Up</button>
                        </form>
                    </div>
                    {/* Overlay */}
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
                    {/* End of overlay */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignInUp