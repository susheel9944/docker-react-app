import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleInput = (k, v) => {
    setForm((prev) => ({ ...prev, [k]: v }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (form.email.trim() === "" || form.password.trim() === "") {
        alert("Please enter email and password");
        return;
      }
      localStorage.setItem("token", "demo-token");
      navigate("/dashboard");
      window.location.reload();
    }, 700);
  };

  return (
    <div className="login-page" role="main">
      <form
        className="login-card"
        onSubmit={handleLogin}
        aria-labelledby="login-title"
      >
        <div className="login-header">
          <div>
            <div id="login-title" className="login-title">
              Welcome back
            </div>
            <div className="login-sub">
              Sign in to continue to your dashboard Made by susheel
            </div>
          </div>
        </div>

        <div className="form">
          <div className="field">
            <input
              ref={emailRef}
              className="input"
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleInput("email", e.target.value)}
              aria-label="Email"
              autoComplete="email"
            />
            <label className="label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="field">
            <input
              className="input"
              id="password"
              type={showPwd ? "text" : "password"}
              value={form.password}
              onChange={(e) => handleInput("password", e.target.value)}
              aria-label="Password"
              autoComplete="current-password"
            />
            <label className="label" htmlFor="password">
              Password
            </label>

            <button
              type="button"
              className="pwd-toggle"
              aria-pressed={showPwd}
              onClick={() => setShowPwd((p) => !p)}
              title={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? "🙈" : "👁️"}
            </button>
          </div>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
