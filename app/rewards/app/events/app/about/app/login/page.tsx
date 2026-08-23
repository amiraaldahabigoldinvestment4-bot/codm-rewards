"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    alert("Login system will be connected later.");
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>
            Welcome <span>Back</span>
          </h1>

          <p>
            Sign in to your CODM Rewards account.
          </p>

          <form
            onSubmit={handleLogin}
            style={{
              maxWidth: "450px",
              margin: "40px auto 0",
              textAlign: "left",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label>Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "8px",
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "8px",
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Login
            </button>
          </form>

          <p style={{ marginTop: "25px" }}>
            Don't have an account?{" "}
            <a href="/signup" style={{ color: "#ff2020" }}>
              Create one
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
