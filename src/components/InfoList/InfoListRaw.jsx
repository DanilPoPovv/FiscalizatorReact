import { renderCells } from "./infoListHelper"; import Cell from "../Cell/Cell";

export default function InfoListRaw({ item, columns, onAction }) {
  const visibleColumns = columns.filter(c => c.visible && !c.isAction);
  const actionColumn = columns.find(c => c.isAction);

  return (
    <>
      {visibleColumns.map(col => (
        <Cell
          key={`${item.Id}-${col.field}`}
          itemText={item[col.field]}
        />
      ))}

      {actionColumn && (
        <Cell
          key={`${item.Id}-action`}
          itemText={
            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
              <button onClick={() => onAction("edit", item)}>✏️</button>
              <button onClick={() => onAction("delete", item)}>🗑️</button>
              <button onClick={() => onAction("create")}>➕</button>
            </div>
          }
        />
      )}
    </>
  );
}