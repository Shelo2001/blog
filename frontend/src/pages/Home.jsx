import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Spinner from "../components/Spinner";
import heroimg from "../assets/homehero.png";
import { AiOutlineEye } from "react-icons/ai";

const Home = () => {
    const [categories, setCategories] = useState();
    const [articles, setArticles] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const { data } = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/categories`
            );
            setCategories(data);
            setLoading(false);
        };
        const getArticles = async () => {
            setLoading(true);
            const { data } = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/articles`
            );
            setArticles(data.data);
            setLoading(false);
        };
        getCategories();
        getArticles();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="topics">
                    <h2>Popular Topics</h2>
                    {loading ? (
                        <Skeleton style={{ width: "40%" }} />
                    ) : (
                        <div className="categories">
                            {categories?.map((category) => (
                                <Link to={`/articles/${category.name}`}>
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className="articles">
                    {loading ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Spinner />
                        </div>
                    ) : (
                        <div className="articles-container">
                            {articles?.map((article) => (
                                <Link
                                    to={`/articles/${article.category}/${article.id}`}
                                >
                                    <div className="article-card">
                                        <img src={article.image} />
                                        <Link
                                            to={`/articles/${article.category}`}
                                        >
                                            <p className="category">
                                                {article.category}
                                            </p>
                                        </Link>
                                        <h4>{article.title}</h4>
                                        <p className="date">
                                            {article.created_at
                                                .substring(0, 10)
                                                .split("-")
                                                .join(".")}
                                        </p>

                                        <p className="description">
                                            {article.description.substring(
                                                0,
                                                150
                                            )}
                                            ...
                                        </p>
                                        <p className="min-read">
                                            {article.description.length <
                                            800 ? (
                                                <p>5 Min read</p>
                                            ) : article.description.length <
                                              1000 ? (
                                                <p>10 Min read</p>
                                            ) : (
                                                <p>15 Min read</p>
                                            )}
                                        </p>
                                        <p className="views">
                                            <AiOutlineEye />
                                            &nbsp;&nbsp;
                                            <span>{article.views}</span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className="home-hero">
                    <img src={heroimg} />
                    {articles?.slice(0, 1).map((a) => (
                        <Link to={`/articles/${a.category}/${a.id}`}>
                            <div className="hero-description">
                                <p>{a.category}</p>
                                <h2>{a.title}</h2>
                                <h4 className="date">
                                    {a.created_at
                                        .substring(0, 10)
                                        .split("-")
                                        .join(".")}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
