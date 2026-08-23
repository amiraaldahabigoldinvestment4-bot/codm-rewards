"use client";

export default function DashboardPage() {
  return (
    <main>
      <section>
        <div className="container">

          <div className="section-title">
            <h1>
              Welcome to Your <span>Dashboard</span>
            </h1>

            <p>
              Manage your account, points, activities, and rewards.
            </p>
          </div>

          <div className="cards">

            <div className="card">
              <h3>👤 Account</h3>
              <p>
                Username: Player
              </p>

              <a href="/about" className="btn">
                Account Details
              </a>
            </div>

            <div className="card">
              <h3>⭐ Your Points</h3>
              <p>
                0 Points
              </p>

              <a href="/events" className="btn">
                Earn Points
              </a>
            </div>

            <div className="card">
              <h3>🎁 Rewards</h3>
              <p>
                Explore available rewards and redemption options.
              </p>

              <a href="/rewards" className="btn">
                View Rewards
              </a>
            </div>

          </div>

          <section>
            <div className="section-title">
              <h2>Recent Activity</h2>

              <p>
                Your completed activities will appear here.
              </p>
            </div>

            <div className="card">
              <p>
                No activity yet.
              </p>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
