import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const CreateArticle = () => {
    const [categories, setCategories] = useState();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescriptiom] = useState("");
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
        getCategories();
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const createArticle = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            const { data } = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/api/articles/create`,
                {
                    title,
                    image,
                    category,
                    description,
                    user_id: user?.id,
                }
            );

            if (data) {
                document.location.href = "/profile";
            }
        };

        createArticle();
    };

    return (
        <div>
            <Navbar />
            <div className="create-article">
                <h2 className="header">Create Article</h2>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                />
                <input
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    placeholder="Image SRC"
                />
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option default>Select Category</option>
                    {categories?.map((category) => (
                        <option value={category?.name}>{category?.name}</option>
                    ))}
                </select>
                <textarea
                    onChange={(e) => setDescriptiom(e.target.value)}
                    placeholder="Article text goes here..."
                />
                <button onClick={submitHandler} className="create">
                    Create Article
                </button>
            </div>
        </div>
    );
};

export default CreateArticle;
