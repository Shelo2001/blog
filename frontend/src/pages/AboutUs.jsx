import React from "react";
import Navbar from "../components/Navbar";
import aboutus from "../assets/aboutus.svg";

const AboutUs = () => {
    return (
        <div className="aboutus">
            <Navbar />
            <h1>About Us</h1>
            <img src={aboutus} />
        </div>
    );
};

export default AboutUs;
