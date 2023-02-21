import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
    const { id } = useParams();

    useEffect(() => {
        const incrementViews = async () => {
            await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/articles/${id}`
            );
        };
        incrementViews();
    }, []);
    return <div>Article</div>;
};

export default Article;
