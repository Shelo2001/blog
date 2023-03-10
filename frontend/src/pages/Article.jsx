import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState();
    const [author, setAuthor] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const incrementViews = async () => {
            setLoading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/articles/${id}`
            );
            console.log(data);
            setArticle(data.article);
            setAuthor(data.author);
            setLoading(false);
        };

        incrementViews();
    }, []);

    return (
        <div className="article">
            {loading ? (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                >
                    <Spinner />
                </div>
            ) : (
                <div className="article-container">
                    <Link to={`/`}>
                        <button className="back-button">
                            <BiArrowBack
                                size={20}
                                style={{ strokeWidth: "1" }}
                            />
                        </button>
                    </Link>
                    <img src={article?.image} />
                    <h3>{article?.title}</h3>
                    <div className="article-content">
                        <div className="left">
                            {article?.created_at
                                .substring(0, 10)
                                .split("-")
                                .join(".")}{" "}
                            -{" "}
                            {article?.description.length < 800 ? (
                                <>5 Min read</>
                            ) : article?.description.length < 1000 ? (
                                <>10 Min read</>
                            ) : (
                                <>15 Min read</>
                            )}
                        </div>
                        <div className="right">
                            <p>{article?.description}</p>
                        </div>
                    </div>

                    <div className="views-category">
                        <Link to={`/articles/${article?.category}`}>
                            <p className="category">{article?.category}</p>
                        </Link>
                        <p>
                            <AiOutlineEye /> {article?.views}
                        </p>
                    </div>

                    <hr className="line" />
                    <div className="user">Author: {author?.name}</div>
                </div>
            )}
        </div>
    );
};

export default Article;
