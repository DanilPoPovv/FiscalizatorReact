import InfoListCell from "./InfoListCell";
export default function InfoListRaw({ client }) {
  return (
    <>
      <InfoListCell itemText={client.name} />
      <InfoListCell itemText={client.email} />
      <InfoListCell itemText={client.address} />
      <InfoListCell
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