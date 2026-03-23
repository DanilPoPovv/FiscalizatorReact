import { Navbar } from "../Navbar/Navbar";
import "../../styles/AdminPage.css"
import { useState } from "react";
import  ClientInfoSheet  from "./ClientInfoSheet"
function AdminPage() {

    const [activePage, setActivePage] = useState("admin")

  return (
    <div>
      <Navbar onNavigate={setActivePage} />

      {activePage === "/client" && <ClientInfoSheet/>}
      {activePage === "/admin" && <div>Страница админов</div>}
      {activePage === "main" && <div>Фискализатор</div>}
    </div>
  );
}
export default AdminPage;