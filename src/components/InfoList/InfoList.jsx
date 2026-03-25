import React, { Fragment } from "react";
import InfoListRaw from "./InfoListRaw";
import InfoListHeader from "./InfoListHeader";

export default function InfoList() {
  const clients = [
    { id: 1, name: "Азамат", email: "a31223213123@gmail.com", address: "address 1" },
    { id: 2, name: "Иван", email: "i@gmail.com", address: "address 2" },
    { id: 3, name: "Sam", email: "s@gmail.com", address: "address 3" }
  ];

  const headers = ["Имя", "Email", "Адрес", "Действие"];

 
  return (
<div className="clientInfoList">
  <InfoListHeader style={{color : "#80c0ff"}} headers={headers} />
  {clients.map(client => (
    <InfoListRaw key={client.id} client={client} />
  ))}
</div>
  );
}