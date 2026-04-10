import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import ClientListPage from "./pages/ClientListPage";
import AdminUserPage from "./pages/AdminUserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Navigate to="/login" replace />} />
       <Route path="/login" element={<LoginForm/>}/>
       <Route path="/admin" element={<AdminPage />}>
          <Route path="main" index element={<div style={{color : "#80c0ff",display : "flex", justifyContent : "center", alignItems: "center",height: "80vh"  }}>ГЛАВНАЯ СТРАНИЦА</div>} />
          <Route path="clients" element={<ClientListPage />} />
          <Route path="users" element={<AdminUserPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;