import { Navbar } from "./Navbar";
import { ClientInfoDiv } from "./ClientInfoDiv";
import "../styles/AdminPage.css"
function AdminPage() {
    const clients = [
    { id: 1, name: "Азамат", email: "a@gmail.com" },
    { id: 2, name: "Иван", email: "i@gmail.com" },
    { id: 3, name: "Sam", email: "s@gmail.com" }
  ];
  return (
    <div >
      <Navbar />
      <div
    style={{
    display: "flex",
    flexDirection: "column",  
    width: "100%",
}}>


    </div>
        <ClientInfoDiv client={{name : "Инн", email : "Имя"}} showButton={false} />
        {clients.map(client => (
          <ClientInfoDiv key={client.id} client={client} />
        ))}
      </div>

  );
}

export default AdminPage;