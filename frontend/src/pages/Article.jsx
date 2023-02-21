import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const incrementViews = async () => {
            setLoading(true);
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/articles/${id}`
            );
            setArticle(data);
            setLoading(false);
        };

        incrementViews();
    }, []);

    return (
        <div className="article">
            {loading ? (
                <Spinner />
            ) : (
                <div className="article-container">
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

                    <p className="category">
                        <Link to={`/articles/${article?.category}`}>
                            {article?.category}
                        </Link>
                    </p>
                    <hr className="line" />
                    <div className="user">
                        <Link to={`/user/${article?.user_id}`}>
                            {article?.user_id}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Article;
