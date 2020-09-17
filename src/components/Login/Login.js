import React, { useRef, useState } from 'react';
import './Login.css';
import Container from 'react-bootstrap/Container';
import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <form className="login d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <div className="login-input-field d-flex flex-column">
                    <label>First Name:</label>
                    <input type="text" placeholder="First name" name="firstName" ref={register({ required: true, maxLength: 80 })} />
                    {errors.firstName && <p>This field is required!</p>}
                </div>
                <div className="login-input-field d-flex flex-column">
                    <label>Last Name:</label>
                    <input type="text" placeholder="Last name" name="lastName" ref={register({ required: true, maxLength: 100 })} />
                    {errors.lastName && <p>This field is required!</p>}
                </div>
                <div className="login-input-field d-flex flex-column">
                    <label>Email Address:</label>
                    <input type="text" placeholder="Email" name="email" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/ })} />
                    {errors.email && <p>This field is required!</p>}
                </div>
                <div className="login-input-field d-flex flex-column">
                    <label>Password:</label>
                    <div className="d-flex">
                        <input type={passwordShown ? "text" : "password"} placeholder="Password" id="password" name="password" ref={register({ required: true, pattern: /^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[!@#$%^&*()--__+.]){1,}.{8,}$/  })} />
                        <FontAwesomeIcon onClick={() => setPasswordShown(!passwordShown)} icon={faEye} />
                    </div>
                    {errors.password && (<p>Password must contain one uppercase, three lowercase letter, one special character, two numbers and minimum length 8</p>)}
                </div>
                <div className="login-input-field d-flex flex-column">
                    <label>Confirm Password:</label>
                    <div className="d-flex">
                        <input type={confirmPasswordShown ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" ref={register({ required: true, validate: value => value === password.current || "The passwords do not match" })} />
                        <FontAwesomeIcon onClick={() => setConfirmPasswordShown(!confirmPasswordShown)} icon={faEye} />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}                        
                    </div>
                </div>
                <input type="submit" />
            </form>
        </Container>
    );
};

export default Login;