
import "./Navbar.css";
export function Navbar() {
  return (
    <nav className="nav">
  <div className="nav-item">
    Fiscalizator
  </div>

  <div className="nav-item" style={{ cursor: "pointer"}}>
    Dashboard
  </div>

  <div className="nav-item" style={{ cursor: "pointer" }}>
    Profile
  </div>
    </nav>
  );
}