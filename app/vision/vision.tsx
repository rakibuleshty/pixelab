import "./vision.css";

export default function Vision() {
  return (
    <section className="vision-section">
      <p className="section-label">SERVICE</p>

      <h2>Our Vison &amp; Our Goal</h2>

      <div className="service-cards">
        {/* Graphic Design */}
        <div className="service-card">
          <div className="service-icon">⌁</div>

          <h3>Graphic Design</h3>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Quisque dui mi, bibendum eu erat
            <br />
            id, ultricies semper metus. Nunc
            <br />
            dapibus laoreet dolor nec
            <br />
            imperdiet.
          </p>

          <button>Learn More</button>
        </div>

        {/* Video Editing */}
        <div className="service-card">
          <div className="service-icon video-icon">▮</div>

          <h3>Video Editing</h3>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Quisque dui mi, bibendum eu erat
            <br />
            id, ultricies semper metus. Nunc
            <br />
            dapibus laoreet dolor nec
            <br />
            imperdiet.
          </p>

          <button>Learn More</button>
        </div>

        {/* Digital Marketing */}
        <div className="service-card">
          <div className="service-icon marketing-icon">
            <span>▮</span>
            <span>▮</span>
            <span>▮</span>
          </div>

          <h3>Digital Marketing</h3>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
            <br />
            Quisque dui mi, bibendum eu erat
            <br />
            id, ultricies semper metus. Nunc
            <br />
            dapibus laoreet dolor nec
            <br />
            imperdiet.
          </p>

          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}