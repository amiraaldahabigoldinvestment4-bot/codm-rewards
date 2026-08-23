"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Your message will be connected to the support system later.");
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have a question or need help? Send us a message.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "600px",
              margin: "40px auto 0",
              textAlign: "left",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
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
                placeholder="Your email"
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
              <label>Message</label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                rows={6}
                style={{
                  width: "100%",
                  padding: "15px",
                  marginTop: "8px",
                  background: "#111",
                  color: "#fff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  resize: "vertical",
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
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
