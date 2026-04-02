import Cell from "../Cell/Cell";

export default function InfoListHeader({ headers, style}) {
  return (
    <>
      {headers.map((header, index) => (
        <Cell key={index} itemText={header} style={style} />
      ))}
    </>
  );
}