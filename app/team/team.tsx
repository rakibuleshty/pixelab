import "./team.css";

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-heading">
        <p>OUR TEAM</p>
        <h2>Meet The Team</h2>
      </div>

      <div className="team-cards">

        {/* Vanessa */}
        <div className="team-card">
          <div className="team-person">
            <img src="https://i.ibb.co.com/yFsZLRtm/463b481d2167b24fb85378adbb0279336c42be9b.jpg" alt="Vanessa Laird" />

            <h3>Vanessa Laird</h3>
            <p>UI DESIGNER</p>
          </div>

          <div className="social-links">
            <a href="#">♥</a>
            <a href="#">f</a>
            <a href="#">◎</a>
          </div>
        </div>

        {/* Mason */}
        <div className="team-card">
          <div className="team-person">
            <img src="https://i.ibb.co.com/9H5QkbTG/0c150f5f8c4400731d5f10c8f33bad95dfde82f5.jpg" alt="Mason Campbell" />

            <h3>Mason Campbell</h3>
            <p>UI DESIGNER</p>
          </div>

          <div className="social-links">
            <a href="#">♥</a>
            <a href="#">f</a>
            <a href="#">◎</a>
          </div>
        </div>

        {/* Irea */}
        <div className="team-card">
          <div className="team-person">
            <img src="https://i.ibb.co.com/BKgd92qP/61ef7497ad7bbf2ce7207fd168c7bff32068ae22.jpg" alt="Irea Evans" />

            <h3>Irea Evans</h3>
            <p>CLIENT MANAGER</p>
          </div>

          <div className="social-links">
            <a href="#">♥</a>
            <a href="#">f</a>
            <a href="#">◎</a>
          </div>
        </div>

      </div>
    </section>
  );
}