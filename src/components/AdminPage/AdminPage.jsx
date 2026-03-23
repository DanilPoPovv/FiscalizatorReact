import { Navbar } from "../Navbar/Navbar";
import "../../styles/AdminPage.css"
import { useState } from "react";
import  ClientInfoList  from "./ClientInfoList"
function AdminPage() {

    const [activePage, setActivePage] = useState("admin")

  return (
    <div>
      <Navbar onNavigate={setActivePage} />

      {activePage === "/client" && <ClientInfoList/>}
      {activePage === "/admin" && <div>Страница админов</div>}
      {activePage === "main" && <div>Фискализатор</div>}
    </div>
  );
}
export default AdminPage;