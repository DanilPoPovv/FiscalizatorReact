import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/client" element={<ClientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;