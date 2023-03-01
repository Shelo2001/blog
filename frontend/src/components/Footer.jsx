import React from "react";
import { AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import Subscribe from "./Subscribe";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-navbar">
                <div className="publisher">
                    <h2>Contact the Publisher</h2>
                    <p>
                        <HiOutlineMail /> akakishelia@yahoo.com
                    </p>
                    <p>
                        <AiOutlinePhone /> +995574061816
                    </p>
                </div>
                <div className="location">
                    <h2>Headquarter</h2>
                    <p>
                        <GoLocation />
                        &nbsp;&nbsp; Tbilisi, Georgia
                    </p>
                </div>
                <div className="socials">
                    <h2>Connections</h2>{" "}
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
            </div>
            <div className="footer-footer">
                <div>
                    <p>{new Date().getFullYear()} | Akaki Shelia</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
