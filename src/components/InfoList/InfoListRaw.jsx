import InfoListCell from "./InfoListCell";

export default function InfoListRaw({ item, onAction }) {
  return (
    <>
      {Object.entries(item).map(([key, value]) => (
        <InfoListCell key={key} itemText={value} />
      ))}

      <InfoListCell
        itemText={
          <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
            <button title="Изменить" onClick={() => onAction("edit", item)}>✏️</button>
            <button title="Удалить" onClick={() => onAction("delete", item)}>🗑️</button>
            <button title="Добавить" onClick={() => onAction("create")}>➕</button>
          </div>
        }
      />
    </>
  );
}