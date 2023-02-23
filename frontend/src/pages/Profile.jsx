import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const Profile = () => {
    const [articles, setArticles] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            let user = JSON.parse(localStorage.getItem("user"));
            const { data } = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/api/articles/myarticles/${
                    user?.id
                }`
            );
            setArticles(data.articles);
            setLoading(false);
        };
        getArticles();
    }, []);

    console.log(articles);

    return (
        <div>
            <Navbar />

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                }}
            >
                <h2 style={{ marginLeft: "1.6rem" }}>My Articles</h2>
                <Link to="/create/article">
                    <button
                        style={{
                            marginRight: "1.6rem",
                            height: "40px",
                            fontSize: "18px",
                            padding: "10px 20px",
                            backgroundColor: "#93C6E7",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "10px",
                        }}
                    >
                        Add New Article
                    </button>
                </Link>
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
                                    <a
                                        style={{ zIndex: "1" }}
                                        href={`/articles/${article.category}`}
                                    >
                                        <p className="category">
                                            {article.category}
                                        </p>
                                    </a>
                                    <h4>{article.title}</h4>
                                    <p className="date">
                                        {article.created_at
                                            .substring(0, 10)
                                            .split("-")
                                            .join(".")}
                                    </p>

                                    <p className="description">
                                        {article.description.substring(0, 150)}
                                        ...
                                    </p>
                                    <p className="min-read">
                                        {article.description.length < 800 ? (
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
        </div>
    );
};

export default Profile;
