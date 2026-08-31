import "./testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <p>TESTIMONIALS</p>
        <h2>What Clients say about us</h2>
      </div>

      <div className="testimonial-grid">

        {/* Testimonial 1 */}
        <div className="testimonial">
          <img
            src="https://i.ibb.co.com/81hw5zj/cff8bdd896f5730df623c29a513f900e76096e77.jpg"
            alt="Rayhan Curran"
          />

          <div className="testimonial-content">
            <p>
              Get a fully retina ready site when
              <br />
              you build with Startup Framework.
              <br />
              Websites look sharper and more
              <br />
              gorgeous on devices with retina
              <br />
              display support
            </p>

            <span>RAYHAN CURRAN</span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial">
          <img
            src="https://i.ibb.co.com/WWhrZx74/7f1cd52c3abc0c088574114b6e075e47d3f56e2d.jpg"
            alt="Kayley Frame"
          />

          <div className="testimonial-content">
            <p>
              As a business targeting high net
              <br />
              worth individuals, we were looking
              <br />
              for a slick, cool and mini-malistic
              <br />
              design for our website
            </p>

            <span>KAYLEY FRAME</span>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial">
          <img
            src="https://i.ibb.co.com/3PzQH9f/7564560072a370fe89de05f070dc21b436a016f9.jpg"
            alt="Gene Whitfield"
          />

          <div className="testimonial-content">
            <p>
              The most important part of the
              <br />
              Startup Framework is the samples
            </p>

            <span>GENE WHITFIELD</span>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial">
          <img
            src="https://i.ibb.co.com/4gTzrkRd/52f48851823c044130bb9c6a45382f0ac4b4cc12.jpg"
            alt="Allan Kim"
          />

          <div className="testimonial-content">
            <p>
              I've built my website with Startup
              <br />
              just in one day, and it was ready-to-
              <br />
              go.
            </p>

            <span>ALLAN KIM</span>
          </div>
        </div>

      </div>
    </section>
  );
}