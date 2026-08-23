export default function RewardsPage() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>
            CODM <span>Rewards</span>
          </h1>

          <p>
            Complete activities, earn points, and redeem exciting Call of Duty
            Mobile rewards.
          </p>

          <a href="/" className="btn">
            Back Home
          </a>
        </div>
      </section>

      <section className="rewards">
        <div className="container">
          <div className="section-title">
            <h2>Available Rewards</h2>
            <p>Use your points to unlock rewards.</p>
          </div>

          <div className="cards">
            <div className="reward-card">
              <h3>🎁 100 COD Points</h3>
              <p>Redeem this reward with 1,000 points.</p>
              <a href="#" className="btn">
                Redeem
              </a>
            </div>

            <div className="reward-card">
              <h3>🔥 Battle Pass</h3>
              <p>Redeem a Battle Pass using your earned points.</p>
              <a href="#" className="btn">
                Redeem
              </a>
            </div>

            <div className="reward-card">
              <h3>🏆 Exclusive Reward</h3>
              <p>Special rewards for active members.</p>
              <a href="#" className="btn">
                Redeem
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
