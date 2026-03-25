import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import InfoListAndSearch from "../InfoList/InfoListWithSearch";
function AdminPage() {

    const [activePage, setActivePage] = useState("admin")

  return (
    <div>
      <Navbar onNavigate={setActivePage} />

      {activePage === "/client" && <InfoListAndSearch/>}
      {activePage === "/admin" && <div>Страница админов</div>}
      {activePage === "main" && <div>Фискализатор</div>}
    </div>
  );
}
export default AdminPage;