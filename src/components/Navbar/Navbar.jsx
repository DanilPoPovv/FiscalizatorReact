import "../../styles/Navbar.css";
import { NavItem } from "../Navbar/NavItem";

export function Navbar({ onNavigate }) {
  return (
    <nav className="nav">
      <NavItem NavName="Фискализатор" onClick={() => onNavigate("main")} />
      <NavItem NavName="Клиенты" onClick={() => onNavigate("/client")} />
      <NavItem NavName="Админы" onClick={() => onNavigate("/admin")} />
      <NavItem NavName="Инфа об аккаунте" onClick={() => onNavigate("/admin")} />
    </nav>
  );
}