// import "./navbar.css"

// export default function Navbar() {
//     return (
//         <div>
//             <img src="png epixelab.png" className="logo" />
//             <div className="menu">
//                 <h1 className="text-one">Home</h1>
//                 <h1>About Us</h1>
//                 <h1>Our App</h1>
//                 <h1>Contacts</h1>
//             </div>

//         </div>
//     );
// }

import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/png epixelab.png" className="logo" alt="Epixelab" />

      <div className="menu">
        <h1 className="active">Home</h1>
        <h1>About Us</h1>
        <h1>Our App</h1>
        <h1>Contacts</h1>
      </div>

      <div className="auth-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
}