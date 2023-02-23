import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Article from "./pages/Article";
import ArticlesCategory from "./pages/ArticlesCategory";
import CreateArticle from "./pages/CreateArticle";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/articles/:category/:id" element={<Article />} />
                <Route
                    path="/articles/:category"
                    element={<ArticlesCategory />}
                />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create/article" element={<CreateArticle />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
