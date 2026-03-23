import ClientInfoDivItem from "./CleintInfoDivItem";

export default function ClientInfoHeader({ headers, style}) {
  return (
    <>
      {headers.map((header, index) => (
        <ClientInfoDivItem key={index} itemText={header} style={style} />
      ))}
    </>
  );
}