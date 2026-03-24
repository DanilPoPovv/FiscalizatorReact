import ClientInfoDivItem from "./CleintInfoDivItem";
import "../../styles/AdminPage.css"
export default function ClientInfoRaw({ client }) {
  return (
    <>
      <ClientInfoDivItem itemText={client.name} />
      <ClientInfoDivItem itemText={client.email} />
      <ClientInfoDivItem itemText={client.address} />
      <ClientInfoDivItem
  itemText={
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <button title="Изменить">✏️</button>
      <button title="Удалить">🗑️</button>
      <button title="Добавить">➕</button>
    </div>
  }/>
    </>
  );
}