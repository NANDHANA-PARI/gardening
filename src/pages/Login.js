import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError("");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>Welcome Back </h2>
        <p className="subtitle">Login to Garden Haven</p>

        {error && <small style={{ color: "red" }}>{error}</small>}

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

        <button className="auth-btn">Login</button>

        <div className="auth-footer">
          <span onClick={() => navigate("/forgot-password")}>
            Forgot password?
          </span>
          <span onClick={() => navigate("/signup")}>
            New user? Signup
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
