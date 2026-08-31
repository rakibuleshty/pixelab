import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <img
            src="/png epixelab.png"
            alt="Epixelab"
          />

          <p>© 2020 Epixelab. All rights reserved.</p>
        </div>

        <nav className="footer-links">
          <a href="#">Portfolio</a>
          <a href="#">How it Works</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </nav>

      </div>

      <div className="footer-divider"></div>

      <p className="footer-description">
        Startup Framework contains components and complex blocks which can
        easily be integrated into almost any design.
      </p>

    </footer>
  );
}