import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import InfoListAndSearch from "../InfoList/InfoListWithSearch";
function AdminPage() {

    const [activePage, setActivePage] = useState("admin")

  return (
    <div>
      <Navbar onNavigate={setActivePage} />

      {activePage === "/client" && <InfoListAndSearch headers={["Имя", "Email", "Адрес","Действие"]} 
                                                      creteriaList={["Имя", "город", "адресс", "фамилия"]}/>}
      {activePage === "/admin" && <div>Страница админов</div>}
      {activePage === "/users" && <InfoListAndSearch headers={["Логин", "Имя", "фамилия","Действие"]}
                                                     creteriaList={["Логин", "Имя", "фамилия"]}/>}
      {activePage === "main" && <div>Фискализатор</div>}
    </div>
  );
}
export default AdminPage;