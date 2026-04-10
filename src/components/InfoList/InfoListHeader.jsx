import Cell from "../Cell/Cell";

export default function InfoListHeader({ columns, style}) {
  return (
    <>
      {columns.map((c) => (
        <Cell key={c.field} itemText={c.label} style={style} />
      ))}
    </>
  );
}