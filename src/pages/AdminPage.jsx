import { Navbar } from "../components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar onNavigate={navigate} />
      <Outlet />
    </div>
  );
}

export default AdminPage;