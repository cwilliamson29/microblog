import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        const fetchCat = async () => {
            const res = await axios.get("/categories");
            setCat(res.data);
        };
        fetchCat();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/originals/d3/f8/10/d3f81017090b5bfa809768f5578c719b.jpg" alt="" />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud
                    id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cat.map((c) => {
                        return (
                            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
