import { useState, createContext, useContext, useEffect } from "react";
import "./ErrorAlert.css";

export const AlertContext = createContext();



export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(null);

  function showError(text) {
    setAlert({ text, type: "error" });
  }

  function showSuccess(text) {
    setAlert({ text, type: "success" });
  }

  function closeAlert() {
    setAlert(null);
  }
  useEffect(() => {
    if (!alert || alert.type === "error") return;

    const timer = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ showError, showSuccess }}>
      {children}

      {alert && (
        <div
          className="alert"
          style={{
            borderColor: alert.type === "success" ? "#80c0ff" : "red"
          }}
        >
          <span style={{color : "#80c0ff"}}>{alert.text}</span>
          <button className="alertClose" onClick={closeAlert}>✖</button>
        </div>
      )}
    </AlertContext.Provider>
  );
}