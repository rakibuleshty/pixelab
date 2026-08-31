import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-content">
        <h1>
          We boost
          <br />
          growth for your
          <br />
          startup business
        </h1>

        <p>
          Our goal is top at the heart of creativity services industry
          <br />
          as a digital creator. In has a after comment
        </p>

        <div className="hero-buttons">
          <button className="get-started">Get Started</button>

          <button className="learn-more">
            <span className="play-button">▶</span>
            <span>Learn More</span>
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image-section">
        <div className="hero-circle"></div>

        <img
          src="https://i.ibb.co.com/MkzVXjJ5/man.png"
          alt="Person using smartphone"
          className="hero-image"
        />

        {/* TOP REVIEW CARD */}
        <div className="review-card top-card">
          <div className="review-icon">↗</div>

          <div>
            <strong>100% Business Growth</strong>
            <div className="review-rating">
              <span>★</span>
              4.9
              <small>(1520 Reviews)</small>
            </div>
          </div>
        </div>

        {/* BOTTOM REVIEW CARD */}
        <div className="review-card bottom-card">
          <div>
            <strong>100000 Happy Clients</strong>
            <div className="review-rating">
              <span>★</span>
              4.9
              <small>(15k Reviews)</small>
            </div>
          </div>
        </div>

        {/* LIGHTBULB */}
        <div className="idea">
          <div className="lightbulb">💡</div>
        </div>

        {/* ARROWS */}
        <div className="arrow arrow-one">⌁</div>
        <div className="arrow arrow-two">⌁</div>
      </div>
    </section>
  );
}