import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <div className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter you email..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter you password..." />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </div>
        </div>
    );
}
