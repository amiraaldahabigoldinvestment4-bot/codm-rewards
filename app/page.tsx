import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Earn Points",
    text: "Complete eligible community activities and earn points."
  },
  {
    number: "02",
    title: "Join Events",
    text: "Participate in tournaments and community challenges."
  },
  {
    number: "03",
    title: "Redeem Rewards",
    text: "Use your points for available community rewards."
  },
  {
    number: "04",
    title: "Track Everything",
    text: "View your points, activities and redemption history."
  }
];

const rewards = [
  {
    name: "Community Profile Badge",
    points: "500 Points",
    description:
      "A promotional digital badge for participating community members."
  },
  {
    name: "Tournament Champion Badge",
    points: "1,000 Points",
    description:
      "A promotional recognition badge for qualifying tournament participants."
  },
  {
    name: "Community Merchandise Voucher",
    points: "2,500 Points",
    description:
      "Example promotional voucher subject to availability and eligibility."
  }
];

const events = [
  {
    name: "Weekend Community Challenge",
    date: "Coming Soon",
    reward: "500 Points",
    status: "Registration Open"
  },
  {
    name: "CODM Community Tournament",
    date: "Coming Soon",
    reward: "1,000 Points",
    status: "Coming Soon"
  }
];

const faqs = [
  {
    question: "What is CODM REWARDS?",
    answer:
      "CODM REWARDS is an independent community platform for community activities, events, points and promotional rewards."
  },
  {
    question: "How do I earn points?",
    answer:
      "Eligible community activities and events can award points. Available activities will be displayed on the platform."
  },
  {
    question: "How do rewards work?",
    answer:
      "Eligible users can use their community points toward available rewards. Reward availability and requirements may change."
  },
  {
    question: "Is this an official Activision website?",
    answer:
      "No. CODM REWARDS is an independent community platform and is not affiliated with, endorsed by, or sponsored by Activision Publishing, Inc. or Call of Duty."
  },
  {
    question: "Do I need my Activision password?",
    answer:
      "No. Never enter your Activision password or two-factor authentication code on this website."
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid" />

        <nav className="navbar">
          <Link href="/" className="logo">
            <span className="logo-box">CR</span>

            <span>
              <strong>CODM</strong>
              <small>REWARDS</small>
            </span>
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/rewards">Rewards</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup" className="nav-button">
              Create Account
            </Link>
          </div>

          <details className="mobile-menu">
            <summary>☰</summary>

            <div className="mobile-links">
              <Link href="/">Home</Link>
              <Link href="/rewards">Rewards</Link>
              <Link href="/events">Events</Link>
              <Link href="/about">About</Link>
              <Link href="/login">Login</Link>
              <Link href="/signup">Create Account</Link>
            </div>
          </details>
        </nav>

        <div className="container hero-content">
          <div className="hero-label">
            INDEPENDENT CODM COMMUNITY PLATFORM
          </div>

          <h1>
            PLAY.
            <br />
            <span>EARN.</span>
            <br />
            REDEEM.
          </h1>

          <p>
            Join the CODM community, participate in events, earn
            reward points and redeem legitimate community rewards.
          </p>

          <div className="hero-buttons">
            <Link href="/signup" className="primary-button">
              Create Free Account
            </Link>

            <Link href="/rewards" className="secondary-button">
              Explore Rewards
            </Link>
          </div>
        </div>

        <div className="hero-circle">
          <div />
          <div />
          <div />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span>PLATFORM</span>
            <h2>Built for the community.</h2>
            <p>
              Discover activities, participate in events and track
              community rewards from one place.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="card feature-card" key={feature.number}>
                <span className="number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>Three simple steps.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <strong>01</strong>
              <h3>CREATE ACCOUNT</h3>
              <p>Join the community platform.</p>
            </div>

            <div className="step">
              <strong>02</strong>
              <h3>EARN POINTS</h3>
              <p>Participate in eligible activities.</p>
            </div>

            <div className="step">
              <strong>03</strong>
              <h3>REDEEM REWARDS</h3>
              <p>Use eligible points on available rewards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span>FEATURED</span>
            <h2>Community rewards.</h2>
            <p>Example promotional rewards for the platform.</p>
          </div>

          <div className="reward-grid">
            {rewards.map((reward) => (
              <div className="card reward-card" key={reward.name}>
                <div className="reward-image">
                  COMMUNITY
                </div>

                <small>COMMUNITY REWARD</small>

                <h3>{reward.name}</h3>

                <p>{reward.description}</p>

                <div className="reward-bottom">
                  <strong>{reward.points}</strong>

                  <Link href="/rewards">
                    View Reward
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <span>UPCOMING</span>
            <h2>Community events.</h2>
          </div>

          <div className="event-grid">
            {events.map((event) => (
              <div className="card event-card" key={event.name}>
                <div className="event-top">
                  <div>
                    <small>COMMUNITY EVENT</small>
                    <h3>{event.name}</h3>
                  </div>

                  <span>{event.status}</span>
                </div>

                <div className="event-info">
                  <div>
                    <small>DATE</small>
                    <strong>{event.date}</strong>
                  </div>

                  <div>
                    <small>REWARD</small>
                    <strong>{event.reward}</strong>
                  </div>
                </div>

                <Link href="/events" className="event-button">
                  View Event
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span>FAQ</span>
            <h2>Questions, answered.</h2>
          </div>

          <div className="faq">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta">
          <span>START TODAY</span>

          <h2>Become part of the community.</h2>

          <p>
            Create an account and discover upcoming community
            activities and rewards.
          </p>

          <Link href="/signup" className="primary-button">
            Create Free Account
          </Link>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="logo">
              <span className="logo-box">CR</span>

              <span>
                <strong>CODM</strong>
                <small>REWARDS</small>
              </span>
            </div>

            <p>
              An independent Call of Duty: Mobile community rewards
              platform.
            </p>
          </div>

          <div>
            <h4>PLATFORM</h4>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/rewards">Rewards</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h4>LEGAL</h4>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            CODM REWARDS is an independent community platform and
            is not affiliated with, endorsed by, or sponsored by
            Activision Publishing, Inc. or Call of Duty.
          </p>

          <p>
            Never enter your Activision password or two-factor
            authentication code on this website.
          </p>

          <small>
            © {new Date().getFullYear()} CODM REWARDS
          </small>
        </div>
      </footer>
    </main>
  );
}
