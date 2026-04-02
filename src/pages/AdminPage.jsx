import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";
import InfoListAndSearch from "../components/InfoList/InfoListWithSearch";
import ClientListPage from "./ClientListPage";
function AdminPage() {

    const [activePage, setActivePage] = useState("admin")

  return (
    <div>
      <Navbar onNavigate={setActivePage} />

      {activePage === "/client" && <ClientListPage/>}
      {activePage === "/admin" && <div>Страница админов</div>}
      {activePage === "/users" && <InfoListAndSearch headers={["Логин", "Имя", "фамилия","Действие"]}
                                                     creteriaList={["Логин", "Имя", "фамилия"]}/>}
      {activePage === "main" && <div>Фискализатор</div>}
    </div>
  );
}
export default AdminPage;