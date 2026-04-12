import { useState, createContext, useContext } from "react";
import "./ErrorAlert.css";

const AlertContext = createContext();

export function useAlert() {
  return useContext(AlertContext);
}

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

  return (
    <AlertContext.Provider value={{ showError, showSuccess }}>
      {children}

      {alert && (
        <div
          className="errorAlert"
          style={{
            borderColor: alert.type === "success" ? "#010e25" : "red"
          }}
        >
          <span>{alert.text}</span>
          <button onClick={closeAlert}>✖</button>
        </div>
      )}
    </AlertContext.Provider>
  );
}