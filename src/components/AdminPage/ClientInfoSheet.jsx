import { ClientInfoDiv } from "./ClientInfoDiv";
export default function ClientInfoSheet(){
        const clients = [
    { id: 1, name: "Азамат", email: "a@gmail.com", address : "address 1" },
    { id: 2, name: "Иван", email: "i@gmail.com", address : "address 2"  },
    { id: 3, name: "Sam", email: "s@gmail.com", address : "address 3"  }
  ];
    return (
            // maxWidth должен быть равен ширине всех внутренних ClientInfoDiv чтобы сетка не ехала 
            <div style={{ paddingTop : "100px", margin : "0 auto", width : "fit-content"}}>
                <ClientInfoDiv client={{name : "Инн", email : "Имя", address : "Адресс"}} showButton={false} />
                {clients.map(client => (
                  <ClientInfoDiv key={client.id} client={client} />
                ))}
              </div>
    )
}