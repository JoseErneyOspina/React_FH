import React from 'react';
import {Link} from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Sign Up</h3>
            <form className="auth__form">
                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    className="auth__input"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    // disabled={ true }
                >
                    Sign Up
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already Registered?
                </Link>
            </form>
        </>
    );
};