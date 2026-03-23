import React, { Fragment } from "react";
import ClientInfoRaw from "./ClientListRaw";
import ClientInfoHeader from "./ClientInfoHeader";
export default function ClientInfoList() {
  const clients = [
    { id: 1, name: "Азамат", email: "a31223213123@gmail.com", address: "address 1" },
    { id: 2, name: "Иван", email: "i@gmail.com", address: "address 2" },
    { id: 3, name: "Sam", email: "s@gmail.com", address: "address 3" }
  ];

  const headers = ["Имя", "Email", "Адрес", "Действие"];

 
  return (
<div style={{
  display : "grid",
  gridTemplateColumns: "200px 200px 300px 100px",
  gap: "0px",
  alignItems: "center",
  margin : "200px",
  marginTop : "100px",
  border: "1px solid black",
  width : "fit-content" }}>
  <ClientInfoHeader style={{color : "blue"}} headers={headers} />

  {clients.map(client => (
    <ClientInfoRaw key={client.id} client={client} />
  ))}
</div>
  );
}