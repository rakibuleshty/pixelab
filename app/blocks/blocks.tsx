import "./blocks.css";

export default function Blocks() {
  return (
    <>
      <section className="blocks-section">
        <div className="blocks-content">
          <h2>
            Many Blocks and
            <br />
            Components
          </h2>

          <p>
            Startup Framework contains components
            <br />
            and complex blocks which can easily be
            <br />
            integrated into almost any design.
          </p>

          <button className="explore-button">Explore</button>
        </div>

        <div className="blocks-video">
          <img
            src="https://i.ibb.co.com/RGRtNRV6/lionel-gustave-171878-unsplash.png"
            alt="Startup framework"
          />

          <button className="video-play">
            ▶
          </button>
        </div>
      </section>
    </>
  );
}