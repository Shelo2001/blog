import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "../assets/signup.png";
import axios from "axios";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        if (confirmedPassword === password) {
            const registerUser = async () => {
                const { data } = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/api/signup`,
                    {
                        name,
                        email,
                        password,
                    }
                );
                localStorage.setItem("token", JSON.stringify(data.token));
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.token) {
                    document.location.href = "/";
                }
            };

            registerUser();
        }
    };

    return (
        <div className="signin-container">
            <div className="left">
                <div className="left-header">
                    <Link to="/">
                        <h4>BLOG.</h4>
                    </Link>

                    <p className="signup">
                        allready have an account?{" "}
                        <Link to="/signin">Sign In</Link>
                    </p>
                </div>
                <div className="signin">
                    <h2 className="header">Get Started with BLOG.</h2>
                    <p>Create your account</p>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <button onClick={submitHandler} className="login">
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="right">
                <img src={signup} />
                <div className="image-card">
                    <div className="image-card-header">
                        <p>👍 Top Notch Stock Resources</p>
                    </div>
                    <p className="image-card-desc">
                        Best Blog Articles and Videos from across the internet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
