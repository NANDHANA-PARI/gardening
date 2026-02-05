import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-page">
      <form className="auth-card">
        <h2>Create Account</h2>
        <p className="subtitle">Signup to get started</p>

        <div className={`input-box ${name && "filled"}`}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Full Name</label>
        </div>

        <div className={`input-box ${email && "filled"}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className={`input-box ${password && "filled"}`}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <button className="auth-btn">Signup</button>

        <div className="auth-footer" style={{ justifyContent: "center" }}>
          <span onClick={() => navigate("/login")}>
            Already have an account? Login
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
