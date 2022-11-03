import Sidebar from "../../components/Sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Username" />
                    <label>Email</label>
                    <input type="email" placeholder="email" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
