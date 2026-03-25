import InfoListCell from "./InfoListCell";

export default function InfoListHeader({ headers, style}) {
  return (
    <>
      {headers.map((header, index) => (
        <InfoListCell key={index} itemText={header} style={style} />
      ))}
    </>
  );
}