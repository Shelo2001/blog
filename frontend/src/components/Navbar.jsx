import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin, AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import axios from "axios";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const logoutHandler = () => {
        const logoutUser = async () => {
            const token = JSON.parse(localStorage.getItem("token"));

            await axios.get(`${import.meta.env.VITE_BASE_URL}/api/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "/signin";
        };

        logoutUser();
    };

    return (
        <div className="navbar-container">
            <div className="img"></div>
            <div className="navbar">
                <div className="left">
                    <Link to="/">
                        <p>BLOG.</p>
                    </Link>
                </div>
                <div className="right">
                    <div className="routes">
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <Link to="/about">
                            <p>About</p>
                        </Link>
                        <Link to="/articles/all">
                            <p>Articles</p>
                        </Link>
                        <Link to="/contact">
                            <p>Contact Us</p>
                        </Link>
                    </div>
                    <div className="line" />
                    <div className="socials">
                        <a href="">
                            <BsFacebook className="facebook" />
                        </a>
                        <a href="">
                            <AiOutlineLinkedin className="twitter" />
                        </a>
                        <a href="">
                            <BsGithub className="youtube" />
                        </a>
                    </div>
                    <div className="line" />
                    <div className="user">
                        {user ? (
                            <div>
                                <Link to="/profile">{user?.name}</Link>
                                <button
                                    className="logout"
                                    onClick={logoutHandler}
                                >
                                    <p>
                                        <FiLogOut /> Logout
                                    </p>
                                </button>
                            </div>
                        ) : (
                            <Link to="/signin">
                                <AiOutlineUser />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
