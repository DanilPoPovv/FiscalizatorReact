import { useState } from "react";
import { getUserRole} from "../utils/jwtDecoder";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [Username, setLogin] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5068/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username,
          Password,
        }),
      });

      if (!response.ok) {
        alert("Ошибка авторизации");
        return;
      }

      const data = await response.text();
      
      localStorage.setItem("token", data);

      const role = getUserRole();
      if (role === "GlobalAdmin") {
        navigate("/admin")
      } else {
        navigate("/client")
      }
      alert("Успешный вход!");
    } catch (err) {
      console.error(err);
      alert("Ошибка сети");
    }
  };

  return (
    <div style={{width: "300px", minHeight: "200px", padding: "20px",  border : "2px solid white", margin : "165px auto 0 auto"}}>
      <h2 style={{textAlign: "center", color : "white"}}>Авторизация</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={Username}
          onChange={(e) => setLogin(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%", height: "20px"}}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%", height: "20px" }}
        />

        <button type="submit" style={{  display: "block", width: "100%", height: "25px", marginBottom: "10px"}}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginForm;