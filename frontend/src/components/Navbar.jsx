import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Navbar = () => {
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
                            <AiOutlineTwitter className="twitter" />
                        </a>
                        <a href="">
                            <BsYoutube className="youtube" />
                        </a>
                    </div>
                    <div className="line" />
                    <div className="user">
                        <Link to="/signin">
                            <AiOutlineUser />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
