"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    alert("Signup system will be connected later.");
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>
            Create <span>Account</span>
          </h1>

          <p>
            Join CODM Rewards and start earning points.
          </p>

          <form
            onSubmit={handleSignup}
            style={{
              maxWidth: "450px",
              margin: "40px auto 0",
              textAlign: "left",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label>Username</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Choose a username"
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
                placeholder="Create a password"
                required
                minLength={6}
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
              Create Account
            </button>
          </form>

          <p style={{ marginTop: "25px" }}>
            Already have an account?{" "}
            <a href="/login" style={{ color: "#ff2020" }}>
              Login
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
