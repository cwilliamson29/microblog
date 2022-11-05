import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";
import { useState } from "react";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="fa-solid fa-pen-to-square singlePostIcon"></i>
                        <i className="fa-solid fa-trash-can singlePostIcon"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostDate">
                        Author:{" "}
                        <b>
                            <Link to={`/?user=${post.username}`} className="link">
                                {post.username}
                            </Link>
                        </b>
                    </span>
                    <span className="singlePostDate"> {new Date(post.createdAt).toDateString()} </span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    );
}
