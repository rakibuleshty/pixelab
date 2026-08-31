import "./newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-heading">
        <p>OUR TEAM</p>
        <h2>Subscribe Our Newsletter</h2>
      </div>

      <div className="newsletter-content">

        <div className="newsletter-image">
          <div className="paper">
            <div className="paper-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="envelope">
            <div className="envelope-left"></div>
            <div className="envelope-right"></div>
          </div>
        </div>

        <div className="newsletter-form">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <input
            type="email"
            placeholder="Your E-mail here..."
          />

          <button>Subscribe Our Newsletter</button>
        </div>

      </div>
    </section>
  );
}