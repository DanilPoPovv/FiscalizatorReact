import ClientInfoDivItem from "./CleintInfoDivItem";
import "../../styles/AdminPage.css"
export default function ClientInfoRaw({ client }) {
  return (
    <>
      <ClientInfoDivItem itemText={client.name} />
      <ClientInfoDivItem itemText={client.email} />
      <ClientInfoDivItem itemText={client.address} />
      <ClientInfoDivItem itemText={<button>Удалить</button>}/>
    </>
  );
}