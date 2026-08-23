export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>
            About <span>CODM Rewards</span>
          </h1>

          <p>
            CODM Rewards is a platform designed to give Call of Duty Mobile
            players a simple way to participate in activities, collect points,
            and discover available rewards.
          </p>

          <a href="/" className="btn">
            Back Home
          </a>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <p>
              We're building a simple rewards experience for the CODM
              community.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>🎮 Challenges</h3>
              <p>
                Users can participate in activities and challenges to earn
                points.
              </p>
            </div>

            <div className="card">
              <h3>⭐ Points</h3>
              <p>
                Points can be collected through eligible activities on the
                platform.
              </p>
            </div>

            <div className="card">
              <h3>🎁 Rewards</h3>
              <p>
                Users can use their points toward available rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="section-title">
            <h2>Ready to Get Started?</h2>
            <p>
              Explore the available events and see what rewards are waiting.
            </p>

            <a href="/events" className="btn">
              Explore Events
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
