
import "/FiscalizatorReact/fiscalizator/src/styles/Navbar.css";
import { NavItem } from "/FiscalizatorReact/fiscalizator/src/components/NavItem";
function GetClients(){

}
export function Navbar() {
  return (
    <nav className="nav">
  <div className="nav-item">
    Fiscalizator
  </div>
      <NavItem NavName="Клиенты" />
      <NavItem NavName="Админы" />
    </nav>
  );
}