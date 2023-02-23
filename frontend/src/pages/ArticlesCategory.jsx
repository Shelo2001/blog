import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";

const ArticlesCategory = () => {
    const [articles, setArticles] = useState();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

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
                `${import.meta.env.VITE_BASE_URL}/api/articles/${category}`
            );
            setArticles(data);
            setLoading(false);
        };
        getCategories();
        getArticles();
    }, [setArticles]);

    return (
        <div>
            <Navbar />

            <h2 style={{ marginLeft: "1.6rem" }}>
                {category === "all" ? "All Articles" : `${category} Articles`}
            </h2>
            <div className="topics">
                {loading ? (
                    <Skeleton style={{ width: "40%" }} />
                ) : (
                    <div className="categories">
                        {categories?.map((category) => (
                            <a href={`/articles/${category.name}`}>
                                {category.name}
                            </a>
                        ))}
                    </div>
                )}
                <div className="view-all">
                    <a href={`/articles/all`}>View All</a>
                </div>
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

export default ArticlesCategory;
