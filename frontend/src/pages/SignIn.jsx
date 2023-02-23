import React, { useState } from "react";
import { Link } from "react-router-dom";
import signin from "../assets/signin.png";
import axios from "axios";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const loginUser = async () => {
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/signin`,
                {
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

        loginUser();
    };

    return (
        <div className="signin-container">
            <div className="left">
                <div className="left-header">
                    <Link to="/">
                        <h4>BLOG.</h4>
                    </Link>

                    <p className="signup">
                        don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
                <div className="signin">
                    <h2 className="header">Welcome Back</h2>
                    <p>Login into your account</p>
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
                    <button onClick={submitHandler} className="login">
                        Log In
                    </button>
                </div>
            </div>
            <div className="right">
                <img src={signin} />
                <div className="image-card">
                    <div className="image-card-header">
                        <p>👍 Top Notch Stock Resources</p>
                    </div>
                    <p className="image-card-desc">
                        Today, we create innovative solutions to the challenges
                        that consumers face in both their everyday lives and
                        events.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
