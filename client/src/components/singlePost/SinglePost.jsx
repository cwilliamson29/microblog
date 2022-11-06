import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, { username: user.username, title, desc });
            setUpdate(false);
        } catch (err) {}
    };
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
            window.location.replace("/");
        } catch (err) {}
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
                {update ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i
                                    className="fa-solid fa-pen-to-square singlePostIcon"
                                    onClick={() => setUpdate(true)}
                                ></i>
                                <i className="fa-solid fa-trash-can singlePostIcon" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )}
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
                {update ? (
                    <textarea className="singlePostDescInput" value={desc} onChange={(e) => setDesc(e.target.value)} />
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}

                {update ? (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
