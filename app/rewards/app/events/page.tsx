export default function EventsPage() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>
            CODM <span>Events</span>
          </h1>

          <p>
            Discover current events, complete challenges, and earn points
            toward exciting rewards.
          </p>

          <a href="/" className="btn">
            Back Home
          </a>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <h2>Featured Events</h2>
            <p>Take part in events and earn more points.</p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>🔥 Daily Challenge</h3>
              <p>
                Complete today's challenge and earn points for your account.
              </p>
              <a href="/rewards" className="btn">
                View Rewards
              </a>
            </div>

            <div className="card">
              <h3>🏆 Weekly Challenge</h3>
              <p>
                Complete weekly activities and receive bigger point bonuses.
              </p>
              <a href="/rewards" className="btn">
                View Rewards
              </a>
            </div>

            <div className="card">
              <h3>🎯 Community Event</h3>
              <p>
                Participate in community activities and compete for special
                rewards.
              </p>
              <a href="/rewards" className="btn">
                View Rewards
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
