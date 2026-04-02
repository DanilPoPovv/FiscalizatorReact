import "./Navbar.css";
import { NavItem } from "./NavItem";

export function Navbar({ onNavigate }) {
  return (
    <nav className="nav">
      <NavItem NavName="Фискализатор" onClick={() => onNavigate("main")} />
      <NavItem NavName="Клиенты" onClick={() => onNavigate("/client")} />
      <NavItem NavName="Пользователи" onClick={() => onNavigate("/users")} />
      <NavItem NavName="Инфа об аккаунте" onClick={() => onNavigate("/admin")} />
    </nav>
  );
}