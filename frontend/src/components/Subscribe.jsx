import React from "react";
import subscribe from "../assets/subscribe.png";

const Subscribe = () => {
    return (
        <div className="subscribe-container">
            <div className="subscribe-card">
                <div className="left">
                    <img src={subscribe} />
                </div>
                <div className="right">
                    <h1>Subscribe to our Newsletter!</h1>
                    <p>
                        Be the first to get exclusive offers ands the latest
                        news
                    </p>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                    />
                    <button>Subscribe Now</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
