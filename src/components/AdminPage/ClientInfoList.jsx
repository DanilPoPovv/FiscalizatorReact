import React, { Fragment } from "react";
import ClientInfoRaw from "./ClientListRaw";
import ClientInfoHeader from "./ClientInfoHeader";
import "../../styles/ClientInfoList.css"
export default function ClientInfoList() {
  const clients = [
    { id: 1, name: "Азамат", email: "a31223213123@gmail.com", address: "address 1" },
    { id: 2, name: "Иван", email: "i@gmail.com", address: "address 2" },
    { id: 3, name: "Sam", email: "s@gmail.com", address: "address 3" }
  ];

  const headers = ["Имя", "Email", "Адрес", "Действие"];

 
  return (
<div className="clientInfoList">
  <ClientInfoHeader style={{color : "#80c0ff"}} headers={headers} />
  {clients.map(client => (
    <ClientInfoRaw key={client.id} client={client} />
  ))}
</div>
  );
}