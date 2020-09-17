import React, { useContext, useRef, useState } from 'react';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGithubSignIn, handleGoogleSignIn, handleTwitterSignIn, initializeFirebaseFramework, signInWithEmailAndPassword } from './loginManager';

initializeFirebaseFramework();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [newUser, setNewUser] = useState(false);
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = data => {
        const {firstName, lastName, email, password} = data;
        if(newUser){
            createUserWithEmailAndPassword(firstName, lastName, email, password)
            .then(res => {
                const newUserInfo = {...loggedInUser};
                newUserInfo.isNewUser = true;
                setLoggedInUser(newUserInfo);
            })
        }
        else{
            signInWithEmailAndPassword(email, password)
            .then(res=> setLoggedInUser(res))
            .catch(err => console.log(err))
        }     
    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => setLoggedInUser(res))
            .catch(err => console.log(err));
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => setLoggedInUser(res))
            .catch(err => console.log(err));
    }

    const twitterSignIn = () => {
        handleTwitterSignIn()
            .then(res => setLoggedInUser(res))
            .catch(err => console.log(err));
    }

    const githubSignIn = () => {
        handleGithubSignIn()
            .then(res => setLoggedInUser(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex flex-column">
            <Container className="d-flex flex-column login-container col-md-4">
                <h2 className="login-heading">Create an account</h2>
                <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                    {
                        newUser &&
                        <>
                            <div className="login-input-field d-flex flex-column">
                                <input type="text" placeholder="First Name" name="firstName" ref={register({ required: true, maxLength: 80 })} />
                                {errors.firstName && <p style={{ color: 'red', }} className="mx-5">This field is required!</p>}
                            </div>
                            <div className="login-input-field d-flex flex-column">
                                <input type="text" placeholder="Last Name" name="lastName" ref={register({ required: true, maxLength: 100 })} />
                                {errors.lastName && <p style={{ color: 'red', }} className="mx-5">This field is required!</p>}
                            </div>
                        </>
                    }
                    <div className="login-input-field d-flex flex-column">
                        <input type="text" placeholder="Email" name="email" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/ })} />
                        {errors.email && <p style={{ color: 'red', }} className="mx-5">This field is required! and must match with email format</p>}
                    </div>
                    <div className="login-input-field d-flex flex-column">
                        <input type={passwordShown ? "text" : "password"} placeholder="Password" id="password" name="password" ref={register({ required: true, pattern: /^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[!@#$%^&*()--__+.]){1,}.{8,}$/ })} />
                        {
                            passwordShown ?
                                <FontAwesomeIcon className="eye" onClick={() => setPasswordShown(!passwordShown)} icon={faEye} />
                                : <FontAwesomeIcon className="eye" onClick={() => setPasswordShown(!passwordShown)} icon={faEyeSlash} />
                        }
                        {
                            errors.password &&
                            <p style={{ color: 'red', }} className="mx-5">Password must contain one uppercase, three lowercase letter, one special character, two numbers and minimum length 8</p>
                        }
                    </div>
                    {
                        newUser &&
                        <div className="login-input-field d-flex flex-column">
                            <input type={confirmPasswordShown ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" ref={register({ required: true, validate: value => value === password.current || "The passwords do not match" })} />
                            {
                                confirmPasswordShown ?
                                    <FontAwesomeIcon className="eye" onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} icon={faEye} />
                                    : <FontAwesomeIcon className="eye" onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} icon={faEyeSlash} />
                            }
                            {
                                errors.confirmPassword &&
                                <p style={{ color: 'red', }} className="mx-5">{errors.confirmPassword.message}</p>
                            }
                        </div>
                    }
                    {
                        !newUser &&
                        <div className="d-flex justify-content-between" style={{ marginRight: '30px', marginLeft: '30px' }}>
                            <p className="remember">Remember me</p><p className="newUser">Forgot Password</p>
                        </div>
                    }
                    {
                        !loggedInUser.success &&
                        <h6 className="text-center" style={{ color: 'red' }}>{loggedInUser.error}</h6>
                    }
                    {
                        loggedInUser.success &&
                        <h6 className="text-center" style={{ color: 'green' }}>User logged in successfully</h6>
                    }
                    {
                        loggedInUser.isNewUser && newUser &&
                        <h6 className="text-center" style={{ color: 'green' }}>User account created successfully</h6>
                    }
                    <input className="main-button signUp-btn" type="submit" value={newUser ? "Create an account" : "Login"} />
                </form>
                <p className="text-center">
                    {newUser ? 'Already have an account?' : "Don't have an account?"}
                    <span className="newUser ml-1" onClick={() => setNewUser(!newUser)}>{newUser ? "Login" : "Create an account"}</span>
                </p>
            </Container>
            <div className="d-flex flex-column my-4">
                <Button onClick={fbSignIn} className="special-btn">
                    <img className="special-btn-icon" src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="" />Continue with Facebook
                </Button>
                <Button onClick={googleSignIn} className="special-btn">
                    <img className="special-btn-icon" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />Continue with Google
                </Button>
                <Button onClick={twitterSignIn} className="special-btn">
                    <img className="special-btn-icon" src="https://img.icons8.com/color/48/000000/twitter.png" alt="" />Continue with Twitter
                </Button>
                <Button onClick={githubSignIn} className="special-btn">
                    <img className="special-btn-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="" />Continue with Github
                </Button>
            </div>
        </div>
    );
};

export default Login;