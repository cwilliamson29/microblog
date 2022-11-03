import "./register.css";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <div className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter you username..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter you email..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter you password..." />
                <button className="registerButton">Register</button>
                <button className="registerLoginButton">Register</button>
            </div>
        </div>
    );
}
